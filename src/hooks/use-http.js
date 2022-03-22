import { useReducer,useCallback } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { loading: false, error: null, data: action.resData };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    default:
      throw new Error("Something is not right!");
  }
};

const useHttp = () => {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback((category, method = "GET") => {
    if (method === "GET") {
      dispatch({ type: "SEND" });
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`
        )
        .then((response) => {
          dispatch({ type: "RESPONSE", resData: response.data.results });
        })
        .catch((error) => {
          dispatch({ type: "ERROR", errorMessage: error.message });
        });
    }
  },[]);

  return {
    data: httpState.data,
    error: httpState.error,
    loading: httpState.loading,
    sendRequest,
  };
};

export default useHttp;
