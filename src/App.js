import { useState } from "react";
import AllMovies from "./components/movies/AllMovies";
import SearchMovies from "./components/movies/search/SearchMovies";
import { MoviesSearchContextProvider } from "./context/movies-search-context";
import SearchResults from "./components/movies/search/SearchResults";
import "./App.css";
import MovieNavbar from "./components/ui/MovieNavbar";

function App() {
  const [searchSuccess, setSearchSuccess] = useState(false);

  const changeSearchSuccessHandlerToTrue = () => {
    setSearchSuccess(true);
  };

  const changeSearchSuccessHandlerToFalse = () => {
    setSearchSuccess(false);
  };

  return (
    <MoviesSearchContextProvider>
      <div id="home" className="app">
        <div className="overlay"></div>
        <MovieNavbar
          onChangeSearchSuccess={changeSearchSuccessHandlerToFalse}
        />
        <h1>WATCH IT</h1>
        <SearchMovies
          onChangeSearchSuccess={changeSearchSuccessHandlerToTrue}
        />
      </div>
      {searchSuccess && <SearchResults />}
      {!searchSuccess && <AllMovies />}
    </MoviesSearchContextProvider>
  );
}

export default App;
