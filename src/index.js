import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToggleNavigationProvider } from "./hooks/useToggleNavigation";

ReactDOM.render(
  <React.StrictMode>
    <ToggleNavigationProvider>
      <App />
    </ToggleNavigationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
