import React from "react";

import {
  Container,
  Card,
  Title,
  Paragraph,
  InsertCity,
  Button,
} from "./styles";

const Login = () => {
  return (
    <Container>
      <Card>
        <Title>REACTWEATHER</Title>
        <Paragraph>
          Bem-vindo à reactweather, uma aplicação sobre previsão do tempo em
          ReactJS
        </Paragraph>
        <InsertCity type="text" placeholder="Insere o nome da tua cidade" />
        <Button>Entrar no App</Button>
      </Card>
    </Container>
  );
};

export default Login;
