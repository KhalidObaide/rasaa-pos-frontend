import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { getJWT } from "./shared";
import { Home } from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import ItemFactor from "./components/ItemFactorBuy/ItemFactor";
import ItemChanges from "./Component/Utilites/Changes";
import BuyFactor from "./Component/buyFactor/BuyFactor";
import Types from "./Component/Utilites/Types";
import MainSell from "./Component/Sell/MainSell";
import "./pos-tailwind.css";
import MyComponent from "./Component/test/Test";
import ItemFactorSell from "./components/ItemFactorSell/ItemFactorSell";
import Sell from "./Component/Sell/MainSell";
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
function passRoutesToBase() {
  const routes = [
    { title: "خرید", route: "/" },
    { title: "فروش", route: "Sell" },
    { title: "تنظیمات", route: "utilities" },
    { route: `/SellFactor}` },
    { route: `/BuyFactor` },
    { route: `itemFactor/Buy?id=${id}` },
    { route: `itemFactor/sell?id=${id}` },
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
        <Route path="itemFactor/Buy" element={<ItemFactor />} />
        <Route path="itemFactor/sell" element={<ItemFactorSell />} />
        {/* <Route path="/SellFactor" element={<ItemChanges />} /> */}
        <Route path="/BuyFactor" element={<BuyFactor />} />
        <Route path="/hamed" element={<Page2 />} />
        <Route path="/utilities" element={<Types />} />
        <Route path="/mainSell" element={<MainSell />} />
        <Route path="/Buyfactor" element={<BuyFactor />} />
        <Route path="/SellFactor" element={<Sell />} />
        <Route path="/Test" element={<MyComponent />} />
        <Route
          path="*"
          element={
            <h1 className="bg-red-500 text-center w-full p-5 text-bold text-white text-4xl">
              Page not found
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
