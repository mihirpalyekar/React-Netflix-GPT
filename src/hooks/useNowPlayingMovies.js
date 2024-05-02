import { useEffect } from "react";
import { API_OPTIONS, GET_NOW_PLAYING_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(GET_NOW_PLAYING_MOVIES + "1", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    return json;
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};


export default useNowPlayingMovies;