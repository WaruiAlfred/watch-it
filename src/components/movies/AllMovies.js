import Latest from "./categories/Latest";
import NowPlaying from "./categories/NowPlaying";
import Popular from "./categories/Popular";
import TopRated from "./categories/TopRated";
import Upcoming from "./categories/Upcoming";

const AllMovies = () => {
  return (
    <div>
      <NowPlaying />
      <Popular />
      <TopRated />
      <Upcoming />
      <Latest />
    </div>
  );
};

export default AllMovies;
