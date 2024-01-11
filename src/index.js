import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Acomponent from "./component/page/props/Acomponent.jsx";
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Acomponent>

        <App />
      
      </Acomponent>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
