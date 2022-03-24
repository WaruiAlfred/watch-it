import { useRef, useContext, useEffect } from "react";
import MoviesSearchContext from "../../../context/movies-search-context";
import useHttp from "../../../hooks/use-http";
import classes from "./SearchMovies.module.css";

const SearchMovies = (props) => {
  const { data, sendRequest } = useHttp();
  const inputRef = useRef();
  const { onAddFoundMovies } = useContext(MoviesSearchContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const searchTerm = inputRef.current.value;
    if (searchTerm !== "") {
      sendRequest("", "SEARCH", searchTerm);
      props.onChangeSearchSuccess();
    }

    inputRef.current.value = "";
  };

  useEffect(() => {
    if (data) {
      onAddFoundMovies(data);
    }
  }, [data, onAddFoundMovies]);

  return (
    <form onSubmit={onSubmitHandler} className={classes["search-form"]}>
      <div>
        <input type="text" placeholder="Search movies..." ref={inputRef} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchMovies;
