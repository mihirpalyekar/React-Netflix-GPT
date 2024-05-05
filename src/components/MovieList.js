import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className=' md:p-6 py-2'>
      <h1 className='text-lg md:text-3xl py-2 md:py-6 text-white'>{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList