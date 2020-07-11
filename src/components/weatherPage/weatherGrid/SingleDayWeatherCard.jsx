import React from "react";
import { Card } from "react-bootstrap";

const SingleDayWeatherCard = ({ icon, temperatureMax, temperatureMin, epochDate }) => {
  const dateDay = new Date(epochDate * 1000).toLocaleDateString("en-us", { weekday: "long" });
  return (
    <Card className="mt-3 bg-transparent">
      <Card.Header className="bg-transparent">
        <h3>{dateDay}</h3>
      </Card.Header>
      <Card.Body>
        <img src={`./weatherIcons/${icon}.png`} alt="weather icon"/>
        <h1 className="mt-3">{Math.round(temperatureMax.Value)}&deg;</h1>
        <h2 className="text-secondary">{Math.round(temperatureMin.Value)}&deg;</h2>
      </Card.Body>
    </Card>
  );
};

export default SingleDayWeatherCard;
