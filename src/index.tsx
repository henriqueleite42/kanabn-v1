import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import Home from "Views/Home";

import store from "Redux/store";

import "Config/fontawesome";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root"),
);

serviceWorker.register();
