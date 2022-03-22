import { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../ui/Card";

import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const [movies, setMovies] = useState(null);

  const { data, sendRequest } = useHttp();

  const { movieCategory } = props;

  useEffect(() => {
    sendRequest(movieCategory);
  }, [sendRequest, movieCategory]);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  if (!movies) return <p>None found</p>;

  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Card className={classes.card}>
            <img
              className={classes["movies-list__image"]}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
