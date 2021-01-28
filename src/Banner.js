import React, { useState, useEffect } from "react";
import requests from "./requests";
import axios from "./axios";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(requests.fetchNetflixOriginals);
      const random =
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ];
      debugger;
      setMovie(random);
    };
    fetchItems();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 250)}
        </h1>
        {/*Soru işaretinin anlamı eğer bu yoksa hata verme demek*/}
      </div>
      <div class="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
