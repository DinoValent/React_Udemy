import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CouterApp.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={7} />
  </React.StrictMode>
);
