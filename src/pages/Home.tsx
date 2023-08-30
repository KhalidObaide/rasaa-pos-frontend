import React from "react";
import { useState } from "react";
import { style } from "../assets/style/styles";
import Hearder from "../components/HeaderHome.jsx/Hearder";
import { BodyBuy } from "../components/BodyBuy/BodyBuy";
import FooterBuy from "../components/FooterBuy.tsx/FooterBuy";
export const Home = () => {
  const [pageNext, setPageNext] = useState(false);

  return (
    <>
      <div className={`${style.col} justify-center items-center p-5 w-full`}>
        <div className={`${style.col} rounded-lg shadow-lg w-full p-5`}>
          <Hearder />
          <BodyBuy pageNext={pageNext} setPageNext={setPageNext} />
          <FooterBuy pageNext={pageNext} setPageNext={setPageNext} />
        </div>
      </div>
    </>
  );
};
