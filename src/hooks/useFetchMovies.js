import { useEffect } from "react";
import { API_OPTIONS, GET_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useFetchMovies = (movieCategory, storeFunction, storeKey) => {
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movies[storeKey]);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      GET_MOVIES + movieCategory + "?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(storeFunction(json.results));
    return json;
  };

  useEffect(() => {
    !movieData && getNowPlayingMovies();
  }, []);
};


export default useFetchMovies;