import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";

import "./CurrentConditions.css";

const CurrentConditions = ({ weatherData, currConData, cityName, measureType, favoriteItem, children }) => {
  const maxTemp = () => Math.round(weatherData.DailyForecasts[0].Temperature.Maximum.Value);
  const minTemp = () => Math.round(weatherData.DailyForecasts[0].Temperature.Minimum.Value);
  const currentTemp = () => Math.round(measureType ? currConData.metricTemp : currConData.imperialTemp);

  const favoriteStar = () => {
    return (
      favoriteItem && <Image width={35} src={`./icons/favorite.svg`} className="favorite-icon fade-in" alt="favorite" />
    );
  };

  return (
    <Row>
      <Col md={5}>
        <h1 className="cityName mb-0">{cityName}</h1>
        <h3>{currConData.dateDay}</h3>
        <h4>
          &uarr;{maxTemp()}&nbsp;&nbsp;&darr;{minTemp()}
        </h4>
      </Col>
      <Col md={4}>
        <div className="d-flex">
          <h4 className="currentTemp">{currentTemp()}&deg;</h4>
          <img className="weatherIcon mt-3" src={currConData.weatherIcon} alt="weather icon" />
        </div>
        <h1>{currConData.weatherText}</h1>
      </Col>
      <Col md={3}>
        {children}
        {favoriteStar()}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData.weatherData,
    currConData: state.weatherData.currentConditionsData,
    cityName: state.weatherData.cityName,
    measureType: state.weatherData.measureType,
    favoriteItem: state.favorite.favoriteItem,
  };
};

export default connect(mapStateToProps, null)(CurrentConditions);
