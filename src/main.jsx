import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Globalcontext from "./Context/Globalcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Globalcontext>
        <App />
      </Globalcontext>
    </BrowserRouter>
  </React.StrictMode>
);
