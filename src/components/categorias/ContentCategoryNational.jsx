import React from 'react';
import Header from '../Header/Header';
import GenreMovieList from '../PeliculasGenero/GenreMovieList';
import gifNational from '../../assets/images/gifNational.gif';

const ContentCategoryNational = () => {

    return (
        <div>
            <Header />
            <img src={gifNational} alt="Marvel GIF" style={{width: '100%', height: '550px'}} />
            <GenreMovieList />
        </div>
    );
};

export default ContentCategoryNational;
