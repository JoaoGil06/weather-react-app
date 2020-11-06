import React, { useRef } from "react";

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
  const cityNameRef = useRef(null);
  const { city, setCity } = useCity();

  function handleSubmitCity(e) {
    e.preventDefault();
    setCity(cityNameRef.current.value);
  }

  return (
    <Container>
      <Card>
        <Title>REACTWEATHER</Title>
        <Paragraph>
          Bem-vindo à reactweather, uma aplicação sobre previsão do tempo em
          ReactJS
        </Paragraph>
        <form onClick={handleSubmitCity}>
          <InsertCity
            type="text"
            placeholder="Insere o nome da tua cidade"
            ref={cityNameRef}
          />
          <Button type="submit">Entrar no App</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
