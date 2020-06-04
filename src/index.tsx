import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import Router from "Views/Router";

import store from "Redux/store";

import "Config/fontawesome";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
