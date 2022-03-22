import MovieList from "./MovieList";

const NowPlaying = () => {
  return (
    <div>
      <h3>Now Playing movies</h3>
      <MovieList movieCategory="now_playing" />
    </div>
  );
};

export default NowPlaying;
