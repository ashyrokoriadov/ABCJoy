import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import configureStore from "./store/configureStore.prod";
import { Provider as ReduxProvider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/style.css";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
