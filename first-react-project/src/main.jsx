import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App.jsx";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
