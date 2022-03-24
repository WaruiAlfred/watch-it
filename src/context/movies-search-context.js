import { createContext, useState } from "react";

const initialValue = {
  foundMovies: {},
  onAddFoundMovies: (movies) => {},
};

const MoviesSearchContext = createContext(initialValue);

export const MoviesSearchContextProvider = (props) => {
  const [foundMovies, setFoundMovies] = useState({});

  const addFoundMoviesHandler = (movies) => {
    setFoundMovies(movies);
  };

  const MoviesSearchContextValues = {
    foundMovies,
    onAddFoundMovies: addFoundMoviesHandler,
  };

  return (
    <MoviesSearchContext.Provider value={MoviesSearchContextValues}>
      {props.children}
    </MoviesSearchContext.Provider>
  );
};

export default MoviesSearchContext;
