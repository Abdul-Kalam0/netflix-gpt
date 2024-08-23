import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopulaMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  // fetch nowPlayingMovies data from TMDB  and update store by creating the custom hook.
  useNowPlayingMovies();
  // fetch usePopulaMovies data from TMDB  and update store by creating the custom hook.
  usePopulaMovies();
  // fetch usePopulaMovies data from TMDB  and update store by creating the custom hook.
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n
        */}
    </div>
  );
};

export default Browse;
