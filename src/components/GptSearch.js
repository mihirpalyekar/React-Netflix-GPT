import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div>
        <img className="w-full fixed -z-10 h-screen object-cover" src={BACKGROUND} alt="background" />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
}

export default GptSearch