import React from "react";
import "./index.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
const app = document.getElementById("root");

// create a root
const root = createRoot(app);
//render app to root
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
