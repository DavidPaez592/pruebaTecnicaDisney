import React from 'react';
import Header from '../Header/Header';
import GenreMovieList from '../PeliculasGenero/GenreMovieList';
import gifMarvel from '../../assets/images/gifMarvel.gif';

const ContentCategoryMarvel = () => {

    return (
        <div>
            <Header />
            <img src={gifMarvel} alt="Marvel GIF" style={{width: '100%', height: '550px'}} />
            <GenreMovieList />
        </div>
    );
};

export default ContentCategoryMarvel;
