import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { getJWT } from "./shared";
import { Home } from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import ItemFactor from "./components/ItemFactorBuy/ItemFactor";
import ItemFactorSell from "./components/ItemFactorSell/ItemFactorSell";
import BuyFactor from "./Component/buyFactor/BuyFactor";
import ItemChanges from "./Component/Utilites/Changes";

function passRoutesToBase() {
    const routes = [
        {title: "صفحه اصلی", route: ""},
        {title: "فروش", route: "Buy"},
        {title: "خرید", route: "Sell"},
        {title: "ثیت فاکتور", route: "/BuyFactor"},
        {title: "تنظیمات", route: "/Utilities"}
    ];
    localStorage.setItem("headers.pos", JSON.stringify(routes));
}

function App() {

  


    passRoutesToBase();
    return (
      <div>
        <Routes>
            <Route path="/Utilities" element={<ItemChanges/> } />
            <Route path="/BuyFactor" element={<BuyFactor/>} />
            <Route path="page2" element={<Page2 />} />
            <Route path="itemFactor" element={<ItemFactor />} />
            <Route path="/itemFactor/sell" element={<ItemFactorSell />} />
        </Routes>
      </div>
    );
}

export default App;


