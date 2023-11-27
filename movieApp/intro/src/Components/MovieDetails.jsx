import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Sidebar from "./Sidebar";

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg3YTczZjYzNTU3ODk4ZTNhOTY4YTVlZGZiNzRlNyIsInN1YiI6IjY1NDM5YzVhZTFhZDc5MDE0YmQyMWE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSIgoMq6Zynrqibem6qqAMhJuchH5CmDPuLp7I5sd7k",
    },
  };

  useEffect(
    () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setMovies(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    },
    { id }
  );
  return (
    <div>
      {loading && (
        <>
          <div className="flex flex-col animate-spin h-screen justify-center items-center space-y-2">
            <figure className="flex space-x-2">
              <div className="w-4 h-4 bg-green-800 animate-pulse rounded-full"></div>
              <div className="w-4 h-4 bg-green-800 rounded-full"></div>
            </figure>
            <figure className="flex space-x-2">
              <div className="w-4 h-4 bg-green-800 animate-pulse rounded-full"></div>
              <div className="w-4 h-4 bg-green-800 rounded-full"></div>
            </figure>
          </div>
        </>
      )}

      {movies && movies.poster_path && (
        <div className="lg:flex lg:space-x-80">
          <Sidebar />
          <figure className="flex flex-col h-screen mt-10 px-4 container mx-auto lg:px-10">
            <div className="h-full shadow-lg" key={movies.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
                alt={`${movies.title}`}
                className="rounded-xl h-screen object-cover"
              />
            </div>
            <h1 className="text-black font-bold text-3xl text-center py-2">
              {movies.original_title}
            </h1>
            <p className="text-black text-lg font-semibold">
              This Movie was released on {movies.release_date}
            </p>
            <p className="text-black text-sm">
              {movies.overview}
            </p>
          </figure>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
