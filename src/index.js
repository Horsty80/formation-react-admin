import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/responsive.css";
import App from "./App";
import { ToggleNavigationProvider } from "./hooks/useToggleNavigation";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ToggleNavigationProvider>
        <App />
      </ToggleNavigationProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
