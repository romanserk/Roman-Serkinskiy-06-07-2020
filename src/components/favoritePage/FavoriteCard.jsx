import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import * as weatherDataActions from "../../redux/actions/weatherDataActions";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import * as errorAction from "../../redux/actions/errorsActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCurrentConditionsDataApiCall } from "../../apiCallsFunctions";
import ThemedContainer from "../hoc/ThemedContainer";

import "./FavoriteCard.css";

const FavoriteCard = (props) => {
  const [currentTemp, setCurrentTemp] = useState();
  const [currentIcon, setCurrentIcon] = useState();
  const [weatherText, setWeatherText] = useState();
  const [removeClicked, setRemoveClicked] = useState(false);

  const favoriteCardClickHandler = () => {
    props.setCityKeyTriggerRefetchAction(props.favoriteItem.cityKey);
    props.setCityName(props.favoriteItem.cityName);
    props.history.replace(`/`);
  };

  const removeFavorite = () => {
    setRemoveClicked(true);
    // holds to enable deleting animation
    setTimeout(() => {
      props.removeFavorite(props.favoriteItem);
    }, 300);
  };

  const parseFetchedTemperature = (currTemp) => {
    return Math.round(props.measureType ? currTemp.Temperature.Metric.Value : currTemp.Temperature.Imperial.Value);
  };

  const fetchCurrentTemp = async () => {
    let currTemp = await fetchCurrentConditionsDataApiCall(props.favoriteItem.cityKey);
    if (currTemp.err) {
      props.addNewError(currTemp.err, true);
      return;
    }
    currTemp = currTemp[0];
    setCurrentIcon(`./weatherIcons/${currTemp.WeatherIcon}.png`);
    setCurrentTemp(parseFetchedTemperature(currTemp));
    setWeatherText(currTemp.WeatherText);
  };

  useEffect(() => {
    fetchCurrentTemp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.measureType]);

  return (
    <ThemedContainer
      className={`favoriteCard shadow-sm ${removeClicked && "puff-out-center"}`}
    >
      <button type="button" className="close" onClick={removeFavorite}>
        <p aria-hidden="true">×</p>
        <span className="sr-only">Close</span>
      </button>
      <div className="pt-3">
        <ListGroup variant="flush" onClick={favoriteCardClickHandler}>
          <ListGroup.Item>
            <h1>{props.favoriteItem.cityName}</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={currentIcon} alt="weather icon" />
            <h1 className="mt-3 ">{currentTemp}&deg;</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>{weatherText}</h2>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </ThemedContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    measureType: state.weatherData.measureType,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCityName: (cityName) => dispatch(weatherDataActions.setCityNameAction(cityName)),
    setCityKeyTriggerRefetchAction: (cityKey) => dispatch(weatherDataActions.setCityKeyTriggerRefetchAction(cityKey)),
    removeFavorite: (favorite) => dispatch(favoriteActions.removeFavoriteAction(favorite)),
    addNewError: (error, bool) => dispatch(errorAction.addNewError(error, bool)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FavoriteCard));
