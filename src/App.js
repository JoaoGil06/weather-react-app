import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import CityProvider from "./context/City";

import Login from "./pages/Login";

function App() {
  return (
    <CityProvider>
      <div>
        <Login />

        <GlobalStyles />
      </div>
    </CityProvider>
  );
}

export default App;
