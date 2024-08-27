import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    // fetch trailer video and and updating the store with trailer video data
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json);
    const trailerData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // if trailer is present take it else take the 1st data video as trailer
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    //console.log(trailer);
    //console.log("trailerData", trailerData[0]);
    //console.log(json.results[0]);
    // getting trailer key from the REDUX store
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) getMovieVideos();
  }, []);
};

export default useMovieTrailer;
