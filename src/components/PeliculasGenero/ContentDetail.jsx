import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import GlobalApi from '../../Servicios/GlobalApi';
import playWhite from '../../assets/images/play-icon-white.png';
import playBlack from '../../assets/images/play-icon-black.png';
import buttonGrupo from '../../assets/images/group-icon.png';
import Derechos from '../Home/Derechos';
import buttonGrupoBlack from '../../assets/images/group-icon-black.png';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip, Modal } from 'antd';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCredits, setMovieCredits] = useState(null);

    // Estados para el cambio de color al pasar el mouse
    const [isPlayHovered, setIsPlayHovered] = useState(false);
    const [isTrailerHovered, setIsTrailerHovered] = useState(false);
    const [isPlusHovered, setIsPlusHovered] = useState(false);
    const [isGrupoHovered, setIsGrupoHovered] = useState(false);
    const [trailerLink, setTrailerLink] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const { movieDetails, movieCredits, movieVideos } = await GlobalApi.getMovieDetails(id, 'es-ES');
                setMovieDetails(movieDetails);
                setMovieCredits(movieCredits);

                const trailer = movieVideos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

                if (trailer) {
                    setTrailerLink(`https://www.youtube.com/embed/${trailer.key}`);
                } else {
                    setTrailerLink(null);
                }
            } catch (error) {
                console.error('Error al obtener detalles de la película:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Header />
            {movieDetails && movieCredits && (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '32%',
                            left: '0',
                            zIndex: 1,
                            color: 'white',
                            textAlign: 'left',
                            margin: '10px',
                            padding: '0px 80vh 0px 10vh',
                            fontWeight: 'bold',
                            fontSize: '24px',
                        }}
                    >
                        <h3 style={{ fontSize: '18px', top: '53%' }}>
                            {movieDetails.release_date && movieDetails.release_date.substring(0, 4)} | {' '}
                            {movieDetails.genres && movieDetails.genres.map(genre => genre.name).join(', ')}
                            <p>{movieCredits.cast && movieCredits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
                        </h3>

                        <div style={{ marginTop: '20px' }}>
                            <Space>
                                <Tooltip title="Play">
                                    <div>
                                        <Button
                                            shape="square"
                                            size="large"
                                            className="botonPlay"
                                            style={{
                                                border: '2px solid white',
                                                borderRadius: '8px',
                                                width: '100px',
                                                height: '60px',
                                                display: 'flex',
                                                backgroundColor: isPlayHovered ? 'white' : '#00000082',
                                                alignItems: 'center',
                                                transition: 'all 0.3s',
                                            }}
                                            onMouseEnter={() => setIsPlayHovered(true)}
                                            onMouseLeave={() => setIsPlayHovered(false)}
                                        >
                                            <img
                                                src={isPlayHovered ? playBlack : playWhite}
                                                alt="Play"
                                                style={{ width: '35%', marginRight: '8px' }}
                                            />
                                            <span style={{ color: isPlayHovered ? 'black' : 'white', fontWeight: 'bold' }}>Play</span>
                                        </Button>
                                    </div>
                                </Tooltip>
                                <div style={{ marginTop: '' }}>
                                    {trailerLink && (
                                        <Tooltip title="Ver tráiler">
                                            <Button
                                                shape="square"
                                                size="large"
                                                className="botonPlay"
                                                style={{
                                                    border: '2px solid white',
                                                    borderRadius: '8px',
                                                    width: '120px',
                                                    height: '60px',
                                                    display: 'flex',
                                                    backgroundColor: isTrailerHovered ? 'white' : '#00000082',
                                                    alignItems: 'center',
                                                    transition: 'all 0.3s',
                                                }}
                                                onMouseEnter={() => setIsTrailerHovered(true)}
                                                onMouseLeave={() => setIsTrailerHovered(false)}
                                                onClick={() => setIsModalVisible(true)}
                                            >
                                                <img
                                                    src={isTrailerHovered ? playBlack : playWhite}
                                                    alt="Play"
                                                    style={{ width: '29%', marginRight: '8px' }}
                                                />
                                                <span style={{ color: isTrailerHovered ? 'black' : 'white', fontWeight: 'bold' }}>Trailer</span>
                                            </Button>
                                        </Tooltip>
                                    )}
                                </div>
                                <Modal
                                    title="Tráiler"
                                    visible={isModalVisible}
                                    onCancel={() => setIsModalVisible(false)}
                                    footer={null}
                                    destroyOnClose
                                    width={'70vw'}
                                >
                                    <iframe
                                        width="100%"
                                        height="600"
                                        style={{ height: '76vh' }}
                                        src={trailerLink}
                                        title="Trailer"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </Modal>

                                <Tooltip title="Agregar">
                                    <div>
                                        <Button
                                            shape="circle"
                                            size="large"
                                            style={{
                                                border: '2px solid white',
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.3s',
                                                backgroundColor: isPlusHovered ? 'white' : '#00000082',
                                            }}
                                            onMouseEnter={() => setIsPlusHovered(true)}
                                            onMouseLeave={() => setIsPlusHovered(false)}
                                        >
                                            <PlusOutlined style={{ fontSize: '24px', color: isPlusHovered ? 'black' : 'white' }} />
                                        </Button>
                                    </div>
                                </Tooltip>
                                <Tooltip title="Grupo">
                                    <Button
                                        shape="circle"
                                        size="large"
                                        style={{
                                            border: '2px solid white',
                                            borderRadius: '50%',
                                            width: '50px',
                                            height: '50px',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s',
                                            backgroundColor: isGrupoHovered ? 'white' : '#00000082',
                                        }}
                                        onMouseEnter={() => setIsGrupoHovered(true)}
                                        onMouseLeave={() => setIsGrupoHovered(false)}
                                    >
                                        <img
                                            src={isGrupoHovered ? buttonGrupoBlack : buttonGrupo}
                                            alt="Agregar a la lista"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Button>
                                </Tooltip>
                            </Space>
                        </div>
                        <div style={{ marginTop: '50px' }}>
                            <p>{movieDetails.overview || 'Sin descripción disponible'}</p>
                        </div>
                    </div>
                    <img
                        src={`${IMAGE_BASE_URL}${movieDetails.backdrop_path}`}
                        alt={`movie-${id}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                    />
                </div>
            )}
            <Derechos />
        </div>
    );
};

export default MovieDetails;
