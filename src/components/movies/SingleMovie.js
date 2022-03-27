import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovieContext from "../../context/single-movie-context";
import Card from "../ui/Card";
// import useHttp from "../../hooks/use-http";

import classes from "./SingleMovie.module.css";

const SingleMovie = () => {
  // const { sendRequest, data } = useHttp();

  const { movieDetails } = useContext(SingleMovieContext);

  /*
  useEffect(() => {
    if (Array.isArray(data)) {
      onAddMovieReviews(data);
      console.log(data);
    }
  }, [data, onAddMovieReviews]);
  */

  if (!movieDetails)
    return (
      <p className={classes["single-movie__error-message"]}>
        Select movie to view details
      </p>
    );

  const {
    // id,
    title,
    poster_path,
    release_date,
    status,
    genres,
    spoken_languages,
    production_companies,
    production_countries,
    overview,
  } = movieDetails;

  const listGenerator = (dataArray) => {
    if (dataArray) {
      const nameArr = dataArray.map((data) => data.name);
      const listOfNames = nameArr.join(",");
      return listOfNames;
    }
    return "None specified";
  };

  const genresContent = listGenerator(genres);
  const languagesContent = listGenerator(spoken_languages);
  const prodCountries = listGenerator(production_countries);
  const prodCompanies = listGenerator(production_companies);

  /*TODO:Implement loading reviews */

  /*
  const onLoadReviews = () => {
    //Collect reviews from API
    if (id) {
      sendRequest("", "GET_REVIEWS", "", id);
    }
  };
  let reviewsContent;

  if (!movieReviews) {
    reviewsContent = <p>No reviews</p>;
  }
  //Render reviews on page
  if (movieReviews) {
    reviewsContent = movieReviews.map((review) => (
      <div key={review.id}>
        <h5>{review.author}</h5>
        <p>
          {review.content.length > 300
            ? review.content.substring(0, 290) + "..."
            : review.content}
        </p>
      </div>
    ));
  }

  <Col className={classes["single-movie__reviews"]}>
    <h3>Reviews</h3>
    <button onClick={onLoadReviews}>Load Reviews</button>
    {reviewsContent}
  </Col>;
  */

  return (
    <Card className={classes["single-movie"]}>
      <Container fluid="md">
        <Row>
          <Col>
            <img
              className={classes["single-movie__image"]}
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
            />
          </Col>
          <Col>
            <div className={classes["single-movie__description"]}>
              <div className={classes["single-movie__description__holder"]}>
                <h3>Title: </h3>
                <p>{title}</p>
              </div>
              <div className={classes["single-movie__description__holder"]}>
                <h4>Status: </h4>
                <p>{status}</p>
              </div>
              <div className={classes["single-movie__description__holder"]}>
                <h4>Genres: </h4>
                <p>{genresContent}</p>
              </div>
              <div className={classes["single-movie__description__holder"]}>
                <h4>Languages: </h4>
                <p>{languagesContent}</p>
              </div>
              <div className={classes["single-movie__description__holder"]}>
                <h4>Release Date: </h4>
                <p>{release_date}</p>
              </div>
              <div className={classes["single-movie__description__holder"]}>
                <h4>Production Countries: </h4>
                <p>{prodCountries}</p>
              </div>
              <div className={classes["single-movie__description__holder"]}>
                <h4>Production Companies: </h4>
                <p>{prodCompanies}</p>
              </div>
              <div className={classes["single-movie__description__holder"]}>
                <h4>Overview: </h4>
                <p>{overview}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default SingleMovie;
