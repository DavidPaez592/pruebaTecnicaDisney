import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/Disneyplus.png';
import { Link, useNavigate } from 'react-router-dom';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import GlobalApi from '../../Servicios/GlobalApi';

function Header() {
    const [toggle, setToggle] = useState(false);
    const [movieList, getTvSeries] = useState([]);
    const navigate = useNavigate();
    const [globalData, setGlobalData] = useState(null);

    useEffect(() => {
        const seriesId = 'ID_DE_LA_SERIE_AQUI';
        getTvSeriesImagesForSpecificSeries(seriesId);
    }, []);

    const getTvSeriesImagesForSpecificSeries = (seriesId) => {
        GlobalApi.getTvSeriesImages(seriesId).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.error('Error al obtener imágenes de la serie de TV:', error);
        });
    };

    const handleImageClick = () => {
        navigate('/');
    };

    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
            route: '/header',
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
            route: '/header',
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus,
            route: '/header', 
        },
        {
            name: 'ORIGINALS',
            icon: HiStar,
            route: '/header', 
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle,
            route: '/ContentCategoryMovies',
        },
        {
            name: 'SERIES',
            icon: HiTv,
            route: '/header',
        },
    ];

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <Link to="/header">
                    <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="" />
                </Link>
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <Link key={item.name} to={item.route}>
                            <HeaderItem name={item.name} Icon={item.icon} />
                        </Link>
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <Link key={item.name} to={item.route}>
                            <HeaderItem name={''} Icon={item.icon} />
                        </Link>
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? (
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                                {menu.map((item, index) => index > 2 && (
                                    <Link key={item.name} to={item.route}>
                                        <HeaderItem name={item.name} Icon={item.icon} />
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <img
                    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    className='w-[40px] rounded-full cursor-pointer'
                    alt=""
                    onClick={handleImageClick}
                />
                <span className="ml-2 cursor-pointer" onClick={handleImageClick}>
                    Cerrar Sesión
                </span>
            </div>
        </div>
    );
}

export default Header;
