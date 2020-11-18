import React from "react";

import { Link } from "react-router-dom";

import { Container, Logo, NavElements, NavElement } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Logo>ReactWeather</Logo>

      <NavElements>
        <NavElement>
          <Link to="/forecast">Ver Previsão</Link>
        </NavElement>
        <NavElement>
          <Link to="/">Procurar no mapa</Link>
        </NavElement>
      </NavElements>
    </Container>
  );
};

export default Navbar;
