import React from 'react';
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <Link to={`/ContentDetail/${movie.id}`}>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className='min-w-[240px] md:h-[350px] object-cover object-left-top-custom mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in cursor-pointer'
        alt=""
      />
    </Link>
  );
}

export default MovieCard;
