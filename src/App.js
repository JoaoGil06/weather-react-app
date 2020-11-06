import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { useCity } from "./context/City";

import Login from "./pages/Login";
import Weather from "./pages/Weather";

function App() {
  const { city } = useCity();

  return (
    <>
      {city ? <Weather /> : <Login />}

      <GlobalStyles />
    </>
  );
}

export default App;
