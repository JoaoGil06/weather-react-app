import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import MainForecast from "../../components/MainForecast";
import Forecast from "../../components/Forecast";

import { Container, Content, ForecastContent } from "./styles";

import { useCity } from "../../context/City";

import axios from "axios";

const Weather = () => {
  const { city, setCity } = useCity();
  const [weather, setWeather] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9123a43fdf9493191359c19b4c4cf72a&units=metric&lang=pt
      `
      )
      .then((response) => {
        setCity(response.data.name);
        setWeather(response.data);
      });
  }, [city, setCity]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=41.15&lon=-8.61&exclude=current,minutely,hourly,alerts&appid=9123a43fdf9493191359c19b4c4cf72a&units=metric&lang=pt
      `
      )
      .then((response) => {
        setForecast(response.data.daily);

        console.log("LatLon: ", response);
      });
  }, [lat, lon]);

  return (
    <Container>
      <Navbar />

      <Content>
        <MainForecast cityName={city} weather={weather} />
      </Content>

      <ForecastContent>
        {forecast.slice(0, 5).map((data) => (
          <Forecast forecastPredict={data} />
        ))}
      </ForecastContent>
    </Container>
  );
};

export default Weather;
