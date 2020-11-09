import React from "react";

import { Container, Predict, MinMax } from "./styles";

import {
  WiDaySunny,
  WiDayThunderstorm,
  WiRain,
  WiDayRain,
  WiSnow,
  WiCloudy,
} from "weather-icons-react";

const Forecast = ({ forecastPredict }) => {
  console.log(forecastPredict);
  return (
    <Container>
      {forecastPredict.weather[0].main === "Clear" ? (
        <WiDaySunny size={80} />
      ) : (
        ""
      )}
      {forecastPredict.weather[0].main === "Thunderstorm" ? (
        <WiDayThunderstorm size={80} />
      ) : (
        ""
      )}
      {forecastPredict.weather[0].main === "Drizzle" ? (
        <WiDayRain size={80} />
      ) : (
        ""
      )}
      {forecastPredict.weather[0].main === "Rain" ? <WiRain size={80} /> : ""}
      {forecastPredict.weather[0].main === "Snow" ? <WiSnow size={80} /> : ""}
      {forecastPredict.weather[0].main === "Clouds" ? (
        <WiCloudy size={80} />
      ) : (
        ""
      )}

      <Predict>{forecastPredict.weather[0].description}</Predict>
      <MinMax>
        Min {Math.floor(forecastPredict.temp.min)}º | Max{" "}
        {Math.floor(forecastPredict.temp.max)}º
      </MinMax>
    </Container>
  );
};

export default Forecast;
