import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black absolute">
        <div className="relative -top-96 px-8">
          <MovieList title={"Now Playing"} movies={movies?.nowPlaying} />
          <MovieList title={"Top rated Movies"} movies={movies?.topRated} />
          <MovieList title={"Popular Movies"} movies={movies?.popular} />
          <MovieList title={"Upcoming Movies"} movies={movies?.upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
