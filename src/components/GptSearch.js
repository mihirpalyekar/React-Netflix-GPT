import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="w-full fixed -z-10"
          src={BACKGROUND}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch