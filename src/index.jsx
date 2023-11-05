import "./index.css";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";

addEventListener("load", () =>
  ReactDOM.createRoot(document.getElementById("app")).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
);
