import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailor = useSelector(store => store.movies.trailorVideo)
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailor = filterData?.length ? filterData?.[0] : json?.results?.[0];
    dispatch(addTrailerVideo(trailor));
  };
  useEffect(() => {
    !movieTrailor && getMovieVideos();
  }, []);
};

export default useMovieTrailor;
