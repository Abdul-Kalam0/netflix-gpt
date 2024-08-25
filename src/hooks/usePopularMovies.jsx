import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopulaMovies = () => {
  // fetch nowPlayingMovies data from TMDB  and update store
  const dispatch = useDispatch();
  const getPopulaMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // when log I AM GETTING TWO TIME RESULT (BCOZ OF STRICT MODE <App /> is wraped in strict mode in index.js for checking any inconsistency)
    // console.log("Popular", json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopulaMovies();
  }, []);
};

export default usePopulaMovies;
