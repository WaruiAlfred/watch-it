import { useContext } from "react";
import SingleMovieContext from "../../context/single-movie-context";
import Latest from "./categories/Latest";
import NowPlaying from "./categories/NowPlaying";
import Popular from "./categories/Popular";
import TopRated from "./categories/TopRated";
import Upcoming from "./categories/Upcoming";
import SingleMovie from "./SingleMovie";

const AllMovies = () => {
  const { visible } = useContext(SingleMovieContext);

  return (
    <div>
      {!visible && <SingleMovie />}
      <NowPlaying />
      <Popular />
      <TopRated />
      <Upcoming />
      <Latest />
    </div>
  );
};

export default AllMovies;
