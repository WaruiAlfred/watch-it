import { Fragment } from "react";
import Navbar from "./components/ui/Navbar";

import "./App.css";
import AllMovies from "./components/movies/AllMovies";

function App() {
  return (
    <Fragment>
      <div className="app">
        <div className="overlay"></div>
        <Navbar />
      </div>
      <AllMovies />
    </Fragment>
  );
}

export default App;
