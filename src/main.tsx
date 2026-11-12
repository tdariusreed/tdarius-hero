import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/anton/400.css";             // display fallback
import "@fontsource/instrument-serif/400.css";        // editorial voice, body weight
import "@fontsource/instrument-serif/400-italic.css"; // editorial voice
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
