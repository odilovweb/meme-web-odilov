import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TonConnectUIProvider manifestUrl="https://lustrous-hamster-31605a.netlify.app/batfrog-app.json">
    <App />
  </TonConnectUIProvider>
);
