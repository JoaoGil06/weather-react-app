import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import MainForecast from "../../components/MainForecast";
import Forecast from "../../components/Forecast";

import { Container, Content, ForecastContent } from "./styles";

import { useLatLng } from "../../context/City";

import axios from "axios";

const Weather = () => {
  const { latLng, setLatLng } = useLatLng();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [forecast, setForecast] = useState([]);

  console.log("State", latLng);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&appid=9123a43fdf9493191359c19b4c4cf72a&units=metric&lang=pt
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
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latLng.lat}&lon=${latLng.lng}&exclude=current,minutely,hourly,alerts&appid=9123a43fdf9493191359c19b4c4cf72a&units=metric&lang=pt
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
