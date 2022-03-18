import Latest from "./Latest";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";

const AllMovies = () => {
  return (
    <div>
      <h1>All Movies</h1>
      <Latest />
      <NowPlaying />
      <Popular />
      <TopRated />
      <Upcoming />
    </div>
  );
};

export default AllMovies;
