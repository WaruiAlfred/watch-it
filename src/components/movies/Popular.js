import MovieList from "./MovieList";

const Popular = () => {
  return (
    <div>
      <h3>Popular movies</h3>
      <MovieList movieCategory="popular" />
    </div>
  );
};

export default Popular;
