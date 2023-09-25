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
import Types from "./Component/Utilites/Types";
import MainSell from './Component/Sell/MainSell'
import "./pos-tailwind.css"
import MyComponent from "./Component/text/Test";
// import Bio from "./Component/SellPage/Sell"
// import './postailwind.css'

function passRoutesToBase() {
    const routes = [
        {title: "صفحه اصلی", route: ""},
        {title: "فروش", route: "Sell"},
        {title: "خرید", route: "Buy"},
        {title: "تنظیمات", route: "utilities"},
        // {title:"" , route:""},
        // {title:"" , route:"/itemFactor/sell"},
    ];
    localStorage.setItem("headers.pos", JSON.stringify(routes));
}

function App() {
    passRoutesToBase();
    return (
      <div>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="Buy" element={<Page1 />} />
            <Route path="Sell" element={<Page2 />} />
            <Route path="/itemFactor/Buy" element={<ItemFactor />} />
            <Route path="/itemFactor/sell" element={<ItemFactorSell />} />
            <Route path="/ha" element={<ItemChanges/> } />
            <Route path="Buy/BuyFactor" element={<BuyFactor/>} />
            <Route path="/hamed" element={<Page2 />} />
            <Route path="/utilities"element={<Types/>} />        
            <Route path="/sell/mainSell" element={<MainSell/>}/>
            <Route path="/Buyfactor" element={<BuyFactor/>}/>
            <Route path="/Test" element={<MyComponent/>}/>
        </Routes>
      </div>
    );
}

export default App;


