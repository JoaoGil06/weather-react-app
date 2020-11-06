import React, { useRef } from "react";

import { useCity } from "../../context/City";

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
  const cityNameRef = useRef(null);
  const { setCity } = useCity();

  function handleSubmitCity(e) {
    e.preventDefault();
    setCity(cityNameRef.current.value);
  }

  return (
    <Container>
      <Logo>ReactWeather</Logo>
      <form onSubmit={handleSubmitCity}>
        <Search placeholder="Pesquisar uma cidade" ref={cityNameRef} />
      </form>
      <NavElements>
        <NavElement>Procurar no mapa</NavElement>
      </NavElements>
    </Container>
  );
};

export default Navbar;
