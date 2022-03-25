import { createContext, useState } from "react";

const initialState = {
  movieDetails: null,
  movieReviews: null,
  onAddMovieReviews: (reviews) => {},
  onAddMovieDetails: (movie) => {},
};

const SingleMovieContext = createContext(initialState);

export const SingleMovieContextProvider = (props) => {
  const [movieData, setMovieData] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);

  const addMovieDetailsHandler = (movie) => {
    setMovieData(movie);
  };

  const addMovieReviewsHandler = (reviews) => {
    setMovieReviews(reviews);
  };

  const contextValue = {
    movieDetails: movieData,
    movieReviews,
    onAddMovieReviews: addMovieReviewsHandler,
    onAddMovieDetails: addMovieDetailsHandler,
  };

  return (
    <SingleMovieContext.Provider value={contextValue}>
      {props.children}
    </SingleMovieContext.Provider>
  );
};

export default SingleMovieContext;
