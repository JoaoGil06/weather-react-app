import React from "react";

import Navbar from "../../components/Navbar";

import { Container } from "./styles";

import { useCity } from "../../context/City";

const Weather = () => {
  const { city } = useCity();

  return (
    <Container>
      <Navbar />
      <h1>Weather Forecast</h1>
      <h2>{city}</h2>
    </Container>
  );
};

export default Weather;
