import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageURL, API_KEY } from "../../constants/Constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios

      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.length !== 0) {
          setUrlid(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <img
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageURL + obj.backdrop_path}`}
              alt="posters"
            />
          );
        })}
      </div>
      {urlid ? <Youtube opts={opts} videoId={urlid.key} /> : ""}
    </div>
  );
}

export default RowPost;
