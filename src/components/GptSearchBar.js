import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector(store => store.config.language)
  return (
    <div className="p-[20%] ">
      <form className="bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceHolde}
        />
        <button className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
