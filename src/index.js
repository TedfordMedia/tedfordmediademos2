
import { createRoot } from "react-dom/client";
import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css"

// const container = document.getElementById("root");
// const root = createRoot(container!);
// root.render(<App tab="home" />);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


