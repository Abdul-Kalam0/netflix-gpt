import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopulaMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  // fetch nowPlayingMovies data from TMDB  and update store by creating the custom hook.
  useNowPlayingMovies();
  // fetch usePopulaMovies data from TMDB  and update store by creating the custom hook.
  usePopulaMovies();
  // fetch useTopRatedMovies data from TMDB  and update store by creating the custom hook.
  useTopRatedMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
