import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constants/Constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${
          movie ? imageURL + movie.backdrop_path : "Loading Image..."
        })`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : "Loading Movie..."}</h1>
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">
          {movie ? movie.overview : "Loading Movie Discription"}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
