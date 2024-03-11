import React from 'react';
import Header from '../Header/Header';
import GenreMovieList from '../PeliculasGenero/GenreMovieList';
import gifDisney from '../../assets/images/gifDisney.gif';

const ContentCategoryDisney = () => {

    return (
        <div>
            <Header />
            <img src={gifDisney} alt="Marvel GIF" style={{width: '100%', height: '550px'}} />
            <GenreMovieList />
        </div>
    );
};

export default ContentCategoryDisney;
