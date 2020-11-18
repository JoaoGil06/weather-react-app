import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Map from "./pages/Map";
import Weather from "./pages/Weather";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/forecast" component={Weather} />
        </Switch>
      </Router>

      <GlobalStyles />
    </>
  );
}

export default App;
