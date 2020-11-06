import React from "react";

import Navbar from "../../components/Navbar";
import MainForecast from "../../components/MainForecast";

import { Container, Content } from "./styles";

import { useCity } from "../../context/City";

const Weather = () => {
  const { city } = useCity();

  return (
    <Container>
      <Navbar />

      <Content>
        <MainForecast cityName={city} />
      </Content>
    </Container>
  );
};

export default Weather;
