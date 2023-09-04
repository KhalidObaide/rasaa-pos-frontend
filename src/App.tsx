import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { getJWT } from "./shared";
import { Home } from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import ItemFactor from "./components/ItemFactorBuy/ItemFactor";
import ItemFactorSell from "./components/ItemFactorSell/ItemFactorSell";
import ItemChanges from "./Component/Utilites/Changes";
import BuyFactor from "./Component/buyFactor/BuyFactor";

function passRoutesToBase() {
    const routes = [
        {title: "صفحه اصلی", route: ""},
        {title: "فروش", route: "Buy"},
        {title: "خرید", route: "Sell"},
        {title:"itemFactor" , route:"ItemFactor"},
        {title:"ItemFactorSell" , route:"/itemFactor/sell"},
    ];
    localStorage.setItem("headers.pos", JSON.stringify(routes));
}

function App() {

  


    passRoutesToBase();
    return (
      <div>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="Sell" element={<Page1 />} />
            <Route path="Buy" element={<Page2 />} />
            <Route path="itemFactor" element={<ItemFactor />} />
            <Route path="/itemFactor/sell" element={<ItemFactorSell />} />
            <Route path="/ha" element={<ItemChanges/> } />
            <Route path="Buy/BuyFactor" element={<BuyFactor/>} />
            <Route path="/hamed" element={<Page2 />} />
        </Routes>
      </div>
    );
}

export default App;


