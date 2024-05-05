import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return
  return (
    <div className='w-24 md:w-48'> 
      <img src={IMG_CDN + posterPath} alt="Movie card" />
    </div>
  );
}

export default MovieCard