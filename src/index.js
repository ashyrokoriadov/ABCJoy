import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import history from "../src/components/common/BrowserHistory";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
