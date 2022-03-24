import MovieList from "../MovieList";

const Upcoming = () => {
  return (
    <div id="upcoming">
      <MovieList movieCategory="upcoming" categoryTitle="Upcoming" />
    </div>
  );
};

export default Upcoming;
