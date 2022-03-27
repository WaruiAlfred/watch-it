import { Fragment, useContext } from "react";
import MoviesSearchContext from "../../../context/movies-search-context";
import SingleMovieContext from "../../../context/single-movie-context";
import MovieItems from "../MovieItems";
import SingleMovie from "../SingleMovie";
import classes from "./SearchResults.module.css";

const SearchResults = () => {
  const { foundMovies } = useContext(MoviesSearchContext);
  const { visible } = useContext(SingleMovieContext);
  const movies = foundMovies.results;

  // const changeSuccessHandler = () => {
  //   props.onChangeSearchSuccess();
  //   console.log("clicked");
  // };
  // <button onClick={changeSuccessHandler}>Back to Main Menu</button>

  if (!movies) return <p className={classes.title}>No movies found</p>;

  return (
    <Fragment>
      <h1 className={classes.title}>Found Movies</h1>
      {!visible && <SingleMovie />}
      <div className={classes["movies-list"]}>
        {movies.map((movie) => (
          <MovieItems key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </Fragment>
  );
};

export default SearchResults;
