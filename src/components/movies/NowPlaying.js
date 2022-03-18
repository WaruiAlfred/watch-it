import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}${API_KEY}`).then((response) => {
      setNowPlaying(response.data.results);
      console.log(nowPlaying);
    });
  }, [nowPlaying]);

  if (!nowPlaying) return <p>None found</p>;

  return (
    <div>
      <h3>Now Playing movies</h3>
      <ul>
        {nowPlaying.map((movie) => (
          <li>{movie.original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NowPlaying;
