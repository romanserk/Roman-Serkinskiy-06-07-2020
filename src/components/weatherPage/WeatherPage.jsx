import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as weatherDataActions from "../../redux/actions/weatherDataActions";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import { Container } from "react-bootstrap";
import "./WeatherPage.css";
import withLoading from "../loadingWrapper/WithLoading";
import ThemedContainer from "../hoc/ThemedContainer";
import WeatherGrid from "./weatherGrid/WeatherGrid";
import SearchForm from "./searchForm/SearchForm";
import CurrentConditions from "./currentConditions/CurrentConditions";
import AddToFavorite from "./AddToFavorite";

const WeatherPage = (props) => {
  useEffect(() => {
    props.setFavoriteItem();
  }, [props]);
  return (
    <Container fluid={true} className="pt-5">
      <Container>
        <SearchForm />
        <ThemedContainer className="slide-in-top-2">
          <CurrentConditions>
            <AddToFavorite />
          </CurrentConditions>
        </ThemedContainer>
        <ThemedContainer className="slide-in-top-3">
          <WeatherGrid dailyForecasts={props.weatherData.DailyForecasts} />
        </ThemedContainer>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData.weatherData,
    favorite: state.favorite.favorite, // need for useEffect dependencies
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteItem: () => dispatch(favoriteActions.setFavoriteItem()),
  };
};
const LoadingWeatherOnLanding = withLoading(WeatherPage, [
  weatherDataActions.fetchWeatherDataAction,
  weatherDataActions.fetchCurrentConditionsData,
]);

export default connect(mapStateToProps, mapDispatchToProps)(LoadingWeatherOnLanding);
