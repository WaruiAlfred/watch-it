import MovieList from "../MovieList";

const TopRated = () => {
  return (
    <div id="top-rated">
      <MovieList movieCategory="top_rated" categoryTitle="Top Rated"  />
    </div>
  );
};

export default TopRated;
