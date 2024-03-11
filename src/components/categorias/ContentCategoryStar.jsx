import React from 'react';
import Header from '../Header/Header';
import GenreMovieList from '../PeliculasGenero/GenreMovieList';
import gifStar from '../../assets/images/gifStar.gif';

const ContentCategoryStar = () => {

    return (
        <div>
            <Header />
            <img src={gifStar} alt="Marvel GIF" style={{width: '100%', height: '550px'}} />
            <GenreMovieList />
        </div>
    );
};

export default ContentCategoryStar;
