import MovieList from "../MovieList";

const NowPlaying = () => {
  return (
    <div id="now-playing">
      <MovieList movieCategory="now_playing" categoryTitle="Now Playing" />
    </div>
  );
};

export default NowPlaying;
