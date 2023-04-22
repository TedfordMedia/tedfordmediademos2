import React from "react";
import RoutesTree from "./RoutesTree";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div id="app">
      <Router>
        <RoutesTree />
      </Router>
    </div>
  );
}
