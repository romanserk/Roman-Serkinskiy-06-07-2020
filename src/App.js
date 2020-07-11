import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as weatherDataActions from "./redux/actions/weatherDataActions";
import * as errorAction from "./redux/actions/errorsActions";
import { fetchKeyByGeolocation } from "./apiCallsFunctions";
import { connect } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import WeatherPage from "./components/weatherPage/WeatherPage";
import FavoritePage from "./components/favoritePage/FavoritePage";
import NotFoundPage from "./components/errorsComponents/NotFoundPage";

function App(props) {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
    };

    const success = async (pos) => {
      var crd = pos.coords;
      const res = await fetchKeyByGeolocation(crd.latitude, crd.longitude);
      if (res.err) {
        props.addNewError(res.err, true);
      } else if (res) {
        props.setCityInfoAction(res);
      }
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <div className={`App ${props.dark ? "dark-theme" : "light-theme"}`}>
        <NavBar />
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route path="/" exact component={WeatherPage} />
              <Route path="/favorite" component={FavoritePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    dark: state.theme.dark,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewError: (error, bool) => dispatch(errorAction.addNewError(error, bool)),
    setCityInfoAction: (result) => dispatch(weatherDataActions.setCityInfoAction(result)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
