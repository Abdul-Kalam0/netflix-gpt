import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-40 relative z-20 px-8">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"UpComming Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Favourite"} movies={movies.nowPlayingMovies} />
        </div>

        {/*
    MoieList - Popular
    MoieList - Now Playing
    MoieList - Trending
    MoieList - Horror
    */}
      </div>
    )
  );
};

export default SecondaryContainer;
