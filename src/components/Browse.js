import React from "react";
import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useFetchMovies("now_playing", addNowPlayingMovies, "nowPlaying");
  useFetchMovies("popular", addPopularMovies, "popular");
  useFetchMovies("top_rated", addTopRatedMovies, "topRated");
  useFetchMovies("upcoming", addUpcomingMovies, "upcoming");
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
