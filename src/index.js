import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// React 19: createRoot API is used
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
