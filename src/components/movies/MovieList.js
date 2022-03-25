import { useState, useEffect, Fragment } from "react";
import useHttp from "../../hooks/use-http";
import MoviesCarousel from "../ui/MoviesCarousel";
import MovieItems from "./MovieItems";

import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const [movies, setMovies] = useState(null);

  const { data, sendRequest } = useHttp();

  const { movieCategory, categoryTitle } = props;

  useEffect(() => {
    sendRequest(movieCategory);
  }, [sendRequest, movieCategory]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setMovies(data);
    }
  }, [data]);

  if (!movies)
    return (
      <h4 style={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
        No movies found under that category title!!! - {categoryTitle}
      </h4>
    );

  return (
    <Fragment>
      <div className={classes["category-title"]}>
        <div></div>
        <h3>{`${categoryTitle} movies`}</h3>
        <div className={classes["category-title__last-div"]}></div>
      </div>
      <MoviesCarousel>
        {movies.map((movie) => (
          <MovieItems
            key={movie.id}
            movieDetails={movie}
          />
        ))}
      </MoviesCarousel>
    </Fragment>
  );
};

export default MovieList;
