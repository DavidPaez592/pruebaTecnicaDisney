// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/LoginUser/login';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import ProductionHouse from './components/ProductionHouse/ProductionHouse';
import GenreMovieList from './components/PeliculasGenero/GenreMovieList';
import ContentDetail from './components/PeliculasGenero/ContentDetail';
import ContentCategoryDisney from './components/categorias/ContentCategoryDisney';
import ContentCategoryPixar from './components/categorias/ContentCategoryPixar';
import ContentCategoryStar from './components/categorias/ContentCategoryStar';
import ContentCategoryMarvel from './components/categorias/ContentCategoryMarvel';
import ContentCategoryNational from './components/categorias/ContentCategoryNational';
import ContentCategoryMovies from './components/categorias/ContentCategoryMovies';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ContentCategoryDisney" element={<ContentCategoryDisney />} />
        <Route path="/ContentCategoryPixar" element={<ContentCategoryPixar />} />
        <Route path="/ContentCategoryMarvel" element={<ContentCategoryMarvel />} />
        <Route path="/ContentCategoryStar" element={<ContentCategoryStar />} />
        <Route path="/ContentCategoryNational" element={<ContentCategoryNational />} />
        <Route path="/ContentCategoryMovies" element={<ContentCategoryMovies />} />
        <Route path="/ContentDetail/:id" element={<ContentDetail />} />
        <Route
          path="/header"
          element={
            <>
              <Header />
              <Slider />
              <ProductionHouse />
              <GenreMovieList />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
