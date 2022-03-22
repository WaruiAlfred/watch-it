import MovieList from "./MovieList";

const TopRated = () => {
  return <div>
  <h3>Top Rated movies</h3>
  <MovieList movieCategory="top_rated" />
</div>
};

export default TopRated;