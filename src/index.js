import React from "react";
import ReactDOM from "react-dom"
import "./global.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"
import { ResultsContextProvider } from "./contexts/ResultsContextProvider"

ReactDOM.render(
    <ResultsContextProvider>
    <Router>
      <App />
    </Router>
    </ResultsContextProvider>

, document.getElementById("root"));