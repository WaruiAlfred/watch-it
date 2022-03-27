import { createContext, useState } from "react";

const initialState = {
  movieDetails: null,
  visible: false,
  // movieReviews: null,
  // onAddMovieReviews: (reviews) => {},
  onToggleVisibility: (id) => {},
  onAddMovieDetails: (movie) => {},
};

const SingleMovieContext = createContext(initialState);

export const SingleMovieContextProvider = (props) => {
  const [movieData, setMovieData] = useState(null);
  const [visibility, setVisibility] = useState(false);
  // const [movieReviews, setMovieReviews] = useState(null);

  const addMovieDetailsHandler = (movie) => {
    setMovieData(movie);
  };

  // const addMovieReviewsHandler = (reviews) => {
  //   setMovieReviews(reviews);
  // };

  const toggleVisibilityHandler = (id) => {
    if (id === movieData?.id) {
      setVisibility((prevState) => !prevState);
    }
  };

  const contextValue = {
    movieDetails: movieData,
    visible: visibility,
    // movieReviews,
    // onAddMovieReviews: addMovieReviewsHandler,
    onToggleVisibility: toggleVisibilityHandler,
    onAddMovieDetails: addMovieDetailsHandler,
  };

  return (
    <SingleMovieContext.Provider value={contextValue}>
      {props.children}
    </SingleMovieContext.Provider>
  );
};

export default SingleMovieContext;
