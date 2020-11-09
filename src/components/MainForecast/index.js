import React from "react";

import {
  Container,
  City,
  ForecastGroup,
  Temperature,
  Predict,
  MinMax,
} from "./styles";

import {
  WiDaySunny,
  WiDayThunderstorm,
  WiRain,
  WiDayRain,
  WiSnow,
  WiCloudy,
} from "weather-icons-react";

const MainForecast = ({ cityName, weather }) => {
  if (weather) {
    return (
      <Container>
        <City>{cityName}</City>

        <ForecastGroup>
          <Temperature>{Math.floor(weather.main.temp)}º</Temperature>
          {weather.weather[0].main === "Clear" ? <WiDaySunny size={120} /> : ""}
          {weather.weather[0].main === "Thunderstorm" ? (
            <WiDayThunderstorm size={120} />
          ) : (
            ""
          )}
          {weather.weather[0].main === "Drizzle" ? (
            <WiDayRain size={120} />
          ) : (
            ""
          )}
          {weather.weather[0].main === "Rain" ? <WiRain size={120} /> : ""}
          {weather.weather[0].main === "Snow" ? <WiSnow size={120} /> : ""}
          {weather.weather[0].main === "Clouds" ? <WiCloudy size={120} /> : ""}
        </ForecastGroup>

        <Predict>{weather.weather[0].description}</Predict>
        <MinMax>
          Min {weather.main.temp_min}º | Max {weather.main.temp_max}º
        </MinMax>
      </Container>
    );
  } else {
    return <>A Carregar...</>;
  }
};

export default MainForecast;
