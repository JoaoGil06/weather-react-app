import React, { useState } from "react";

import { useCity } from "../../context/City";

import {
  Container,
  Card,
  Title,
  Paragraph,
  InsertCity,
  Button,
} from "./styles";

const Login = () => {
  const { city, setCity } = useCity();

  function handleChangeCityName(e) {
    setCity(e.currentTarget.value);
  }

  function handleSubmitCity(e) {
    e.preventDefault();

    console.log(city);
  }

  return (
    <Container>
      <Card>
        <Title>REACTWEATHER</Title>
        <Paragraph>
          Bem-vindo à reactweather, uma aplicação sobre previsão do tempo em
          ReactJS
        </Paragraph>
        <form>
          <InsertCity
            type="text"
            placeholder="Insere o nome da tua cidade"
            onChange={handleChangeCityName}
          />
          <Button type="submit" onClick={handleSubmitCity}>
            Entrar no App
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
