import React from "react";
import Shop from "./shop";
import Navigation from "./navigation";
import { Root } from "./components";

const App = () => (
  <React.Fragment>
    <Navigation />
    <Root>
      <Shop />
    </Root>
  </React.Fragment>
);

export default App;
