import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  // movies come from REDUX using selector
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  // this is early return
  if (!movie) return;
  // out of 20 movies get from store we want a main movie
  const mainMovie = movie[1];
  //console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[38%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
