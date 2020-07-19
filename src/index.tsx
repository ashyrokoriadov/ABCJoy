import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import configureStoreProd from "./store/configureStore.prod";
import configureStoreDev from "./store/configureStore.dev";
import { Provider as ReduxProvider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/style.css";

let store;

if (process.env.NODE_ENV === "production") {
  store = configureStoreProd();
} else {
  store = configureStoreDev();
}

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
