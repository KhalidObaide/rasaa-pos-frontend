import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { getJWT } from "./shared";
import { Home } from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import ItemFactor from "./components/ItemFactorBuy/ItemFactor";

function passRoutesToBase() {
    const routes = [
        {title: "Home", route: ""},
        {title: "Page1", route: "page1"},
        {title: "Page2", route: "page2"}
    ];
    localStorage.setItem("headers.pos", JSON.stringify(routes));
}

function App() {
    passRoutesToBase();
    return (
      <div>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="itemFactor" element={<ItemFactor />} />
        </Routes>
      </div>
    );
}

export default App;


