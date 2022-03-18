import {Fragment} from "react";
import Navbar from "./components/ui/Navbar";

import "./App.css";
import AllMovies from "./components/movies/AllMovies";

function App() {
  return <Fragment>
  <Navbar/>
  <h1>WATCH IT</h1>
  <AllMovies/>
  </Fragment>;
}

export default App;
