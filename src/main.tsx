import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { ContextsProvider } from "./contexts/ContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextsProvider>
      <App />
    </ContextsProvider>
  </React.StrictMode>
);
