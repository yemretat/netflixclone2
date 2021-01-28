import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseurl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
    };
    fetchItems();
  }, [fetchUrl]);
  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  {
    /*You are using fetchUrl from out,if it change you have to reload */
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    {
      /*Bu bize movieTrailerdan geliyor adam gidip bakıyor trailer varsa o isimde döndürüyor */
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      {/* eğer traileurl tanımlanmışsa şunu şunu yap demek , or olsaydı şu tanımlanmışsa bu tanımlanmışsa vs*/}
    </div>
  );
};

export default Row;
