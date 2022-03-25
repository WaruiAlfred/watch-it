import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import classes from "./MovieNavbar.module.css";

const MovieNavbar = (props) => {
  const changeSuccessHandler = () => {
    props.onChangeSearchSuccess();
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={classes.navbar}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className={classes.navbar__brand}
          onClick={changeSuccessHandler}
        >
          <img
            alt="logo"
            src={Logo}
            width="50"
            height="50"
            color="#fff"
            className="d-inline-block"
          />
          {"    "}
          WATCH IT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-0 ms-auto">
            <Nav.Link href="#now-playing">Now Playing</Nav.Link>
            <Nav.Link href="#top-rated">Top Rated</Nav.Link>
            <Nav.Link href="#upcoming">Upcoming</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#popular">Popular</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MovieNavbar;
