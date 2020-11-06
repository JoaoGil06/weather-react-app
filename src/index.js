import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CityProvider from "./context/City";

ReactDOM.render(
  <React.StrictMode>
    <CityProvider>
      <App />
    </CityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
