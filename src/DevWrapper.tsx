import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {AppProvider} from './context.js'
const DevWrapper = () => (
  <Router>
    <AppProvider>
    <App />
    </AppProvider>
  </Router>
);

ReactDOM.render(<DevWrapper />, document.getElementById("app"));
