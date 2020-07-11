import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Row, Col } from "react-bootstrap";
import SingleDayWeatherCard from "./SingleDayWeatherCard";
import "./WeatherGrid.css";

const WeatherGrid = ({ dailyForecasts }) => {

  return (
    <Row className="justify-content-center pl-2 pr-2 text-center">
      {dailyForecasts.map((day) => {
        return (
          <Col key={uuidv4()} lg={2} className="col-lg-5-cols">
            <SingleDayWeatherCard
              icon={day.Day.Icon}
              temperatureMax={day.Temperature.Maximum}
              temperatureMin={day.Temperature.Minimum}
              epochDate={day.EpochDate}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default WeatherGrid;
