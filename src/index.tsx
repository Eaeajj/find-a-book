import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
