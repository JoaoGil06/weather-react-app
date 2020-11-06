import React from "react";

import {
  Container,
  City,
  ForecastGroup,
  Temperature,
  Predict,
  MinMax,
} from "./styles";

import { WiDaySunny } from "weather-icons-react";

const MainForecast = ({ cityName }) => {
  return (
    <Container>
      <City>{cityName}</City>

      <ForecastGroup>
        <Temperature>15º</Temperature>
        <WiDaySunny size={120} />
      </ForecastGroup>

      <Predict>Céu Limpo</Predict>
      <MinMax>Min 5º | Max 20º</MinMax>
    </Container>
  );
};

export default MainForecast;
