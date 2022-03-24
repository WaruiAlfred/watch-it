import Card from "../ui/Card";
import classes from "./MovieItems.module.css";

const MovieItems = (props) => {
  const { poster_path, title, release_date } = props.movieDetails;

  return (
    <Card className={classes.card}>
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
