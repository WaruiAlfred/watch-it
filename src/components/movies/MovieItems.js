import { useEffect, useContext } from "react";
import Card from "../ui/Card";
import useHttp from "../../hooks/use-http";
import classes from "./MovieItems.module.css";
import SingleMovieContext from "../../context/single-movie-context";

const MovieItems = (props) => {
  const { poster_path, title, release_date, id } = props.movieDetails;
  const { data, sendRequest } = useHttp();
  const { onAddMovieDetails } = useContext(SingleMovieContext);

  const fetchSingleMovieDetailsHandler = () => {
    sendRequest("", "GET_DETAILS", "", id);
  };

  useEffect(() => {
    if (data) {
      onAddMovieDetails(data);
    }
  }, [data, onAddMovieDetails]);

  return (
    <Card className={classes.card} onClick={fetchSingleMovieDetailsHandler}>
      <img
        className={classes["movies-image"]}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{release_date}</p>
    </Card>
  );
};

export default MovieItems;
