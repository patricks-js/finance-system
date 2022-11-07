import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { ContextsProvider } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./hooks/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextsProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ContextsProvider>
  </React.StrictMode>
);
