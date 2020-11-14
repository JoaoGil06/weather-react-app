import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Logo,
  Search,
  Button,
  NavElements,
  NavElement,
  Item,
} from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Logo>ReactWeather</Logo>

      <Search placeholder="Pesquisar uma cidade" />

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
