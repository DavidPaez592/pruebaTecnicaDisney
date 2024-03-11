import React from 'react';
import Header from '../Header/Header';
import GenreMovieList from '../PeliculasGenero/GenreMovieList';
import gifPixar from '../../assets/images/gifPixar.gif';

const ContentCategoryPixar = () => {

    return (
        <div>
            <Header />
            <img src={gifPixar} alt="Marvel GIF" style={{width: '100%', height: '550px'}} />
            <GenreMovieList />
        </div>
    );
};

export default ContentCategoryPixar;
