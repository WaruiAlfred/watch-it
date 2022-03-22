import MovieList from "./MovieList";

const Upcoming = () => {
  return (
    <div>
      <h3>Upcoming movies</h3>
      <MovieList movieCategory="upcoming" />
    </div>
  );
};

export default Upcoming;
