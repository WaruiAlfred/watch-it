import { Fragment, useContext } from "react";
import MoviesSearchContext from "../../../context/movies-search-context";
import MovieItems from "../MovieItems";
import classes from "./SearchResults.module.css";

const SearchResults = () => {
  const { foundMovies } = useContext(MoviesSearchContext);
  const movies = foundMovies.results;

  // const changeSuccessHandler = () => {
  //   props.onChangeSearchSuccess();
  //   console.log("clicked");
  // };
  // <button onClick={changeSuccessHandler}>Back to Main Menu</button>

  if (!movies) return <p>No movies found</p>;

  return (
    <Fragment>
      <h1 className={classes.title}>Found Movies</h1>
      <div className={classes["movies-list"]}>
        {movies.map((movie) => (
          <MovieItems
            key={movie.id}
            movieDetails={{
              poster_path: movie.poster_path,
              title: movie.title,
              release_date: movie.release_date,
            }}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default SearchResults;
