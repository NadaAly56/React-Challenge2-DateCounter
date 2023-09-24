import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  <h1 className="counter" style={{ width: "150px", margin: "auto" }}>
      Version 2
    </h1>
    <V2 />
  </StrictMode>
);
