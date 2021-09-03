import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const render = (element: HTMLElement | Element | null) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    element
  );
};
