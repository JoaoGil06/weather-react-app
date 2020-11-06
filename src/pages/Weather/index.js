import React from "react";

import Navbar from "../../components/Navbar";
import MainForecast from "../../components/MainForecast";
import Forecast from "../../components/Forecast";

import { Container, Content, ForecastContent } from "./styles";

import { useCity } from "../../context/City";

const Weather = () => {
  const { city } = useCity();

  return (
    <Container>
      <Navbar />

      <Content>
        <MainForecast cityName={city} />
      </Content>

      <ForecastContent>
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </ForecastContent>
    </Container>
  );
};

export default Weather;
