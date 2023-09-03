import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { getJWT } from "./shared";
import '../src/index.css'
import ItemChanges from "./Component/Utilites/Types"
import BuyFactor from "./Component/buyFactor/BuyFactor";


function Home() {
    const jwt = getJWT();
    return (
        <div>
          <h1 className="bg-gray-500">hellow</h1>
        </div>
    );
}

function Page1() {
  return <h1>Page1</h1>;
}

function Page2() {
  return <h1>Page2</h1>;
}

function passRoutesToBase() {
    const routes = [
        {title: "Home", route: "HOME"},
        {title: "Page1", route: "page1"},
        {title: "Page2", route: "page2"}
    ]
    localStorage.setItem("headers.pos", JSON.stringify(routes));
}

function App() {

  


    passRoutesToBase();
    return (
      <div>
        <Routes>
            <Route path="" element={<ItemChanges/> } />
            <Route path="/BuyFactor" element={<BuyFactor/>} />
            <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
    );
}

export default App;


