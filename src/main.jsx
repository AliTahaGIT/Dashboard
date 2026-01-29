import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./i18n";               
import ThemeRegistry from "./ThemeRegistry.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeRegistry>
        <App />
      </ThemeRegistry>
    </BrowserRouter>
  </StrictMode>
);
