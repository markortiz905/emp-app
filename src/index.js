import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
//import index from "./redux/index";
import { Provider } from "react-redux";
import str from "./redux/store/index";
//window.store = str;
ReactDOM.render(
  <Provider store={str}>
    <BrowserRouter>
      <App store={str} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
