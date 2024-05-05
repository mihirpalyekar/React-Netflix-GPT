import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import setOpenAPI from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult, addOpenAIKey} from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import OpenAI from "openai";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const openaikeyInput = useRef(null);
  const openaikey = useSelector((store) => store.gpt.openaiKey);
  const searchMovieInTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    if (!openaikey) return
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example result:Gadar, Sholay, Don, Harry Potter, golmal, Koi mill gaya";
    const openai = setOpenAPI(openaikey);
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    }).catch(async (err) => {
      if (err instanceof OpenAI.APIError) {
        window.alert("You have entered wrong api key");
      } else {
        throw err;
      }
    });
    if (!gptResults?.choices) {
      return;
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies?.map((movie) =>
      searchMovieInTMDB(movie.trim())
    );
    const movieResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults }));
  };

  const handlOpenaiKeyAddClick = () => {
    dispatch(addOpenAIKey(openaikeyInput.current.value));
  }
  return (
    <div className="pt-[40%] md:p-[20%] ">
      <form
        className="bg-black m-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex">
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9 flex-[9]"
            placeholder={lang[language].gptSearchPlaceHolde}
          />
          <button
            className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3 flex-[3] cursor-pointer disabled:opacity-50 disabled:cursor-none"
            onClick={handleGptSearchClick}
            disabled={!openaikey}
          >
            {lang[language].search}
          </button>
        </div>
        <div className="flex">
          <input
            ref={openaikeyInput}
            type="text"
            className="p-4 m-4 col-span-9 flex-[9]"
            placeholder={lang[language].openaiKey}
          />
          <button
            className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3 flex-[3] cursor-pointer"
            onClick={handlOpenaiKeyAddClick}
          >
            {lang[language].addKey}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
