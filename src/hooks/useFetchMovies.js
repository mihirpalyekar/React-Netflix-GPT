import { useEffect } from "react";
import { API_OPTIONS, GET_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";

const useFetchMovies = (movieCategory, storeFunction) => {
  const dispatch = useDispatch();
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
    getNowPlayingMovies();
  }, []);
};


export default useFetchMovies;