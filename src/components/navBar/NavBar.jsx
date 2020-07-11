import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import * as weatherDataActions from "../../redux/actions/weatherDataActions";
import * as themeActions from "../../redux/actions/themeActions";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { connect } from "react-redux";

const NavBar = (props) => {
  
  const handleMeasureChange = () => props.setMeasureTypeAndFetch(!props.measureType);
  const handleThemeChange = () => props.setDarkTheme(!props.dark);
  const navbarTheme = () => (props.dark && window.innerWidth < 992 ? "dark" : null);
  const themeToggleContent = (str) => <div className="themeToggleContent">{str}</div>;
  const MeasureIcon = (type) => <Image className="h-100 pb-1" src={`./icons/${type}.svg`} alt={`${type}`} />;

  return (
    <Container className="p-0">
      <Navbar bg={navbarTheme()} collapseOnSelect expand="lg">
        <Navbar.Brand className="d-flex" href="/">
          <h2 className="text-white">Herol</h2>
          <img src="/icons/sunPNG512x512.png" width="42" height="42" className="d-inline-block align-top" alt="sun" />
          <h2 className="text-white">Weather</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="pt-3">
              <Switch
                onChange={handleMeasureChange}
                checked={props.measureType}
                checkedIcon={MeasureIcon("celsius")}
                uncheckedIcon={MeasureIcon("farenheit")}
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                height={25}
                width={44}
                className="mt-1"
              />
            </Nav.Link>
            <Nav.Link className="pt-3">
              <Switch
                onChange={handleThemeChange}
                checked={props.dark}
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                uncheckedIcon={themeToggleContent("dark")}
                checkedIcon={themeToggleContent("light")}
                height={25}
                width={62}
                className="mt-1"
              />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="pt-3">
              <h4 className="text-white">Weather</h4>
            </Nav.Link>
            <Nav.Link as={Link} to="/favorite" className="pb-3 pt-3 pr-0">
              <h4 className="pr-0 text-white">Favorite</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    measureType: state.weatherData.measureType,
    dark: state.theme.dark,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setMeasureTypeAndFetch: (bool) => dispatch(weatherDataActions.setMeasureTypeAndFetch(bool)),
    setDarkTheme: (bool) => dispatch(themeActions.setDarkTheme(bool)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
