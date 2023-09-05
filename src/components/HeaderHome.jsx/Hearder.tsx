import React, { useState } from "react";
import { style } from "../../assets/style/styles";
import { CiSearch } from "react-icons/ci";
import Date from "../Date/Date";
import { Link } from "react-router-dom";
// import Types from "../../Component/Utilites/Types";
// import {  Print , Cross , Remove , Edit , Check } from "../../assets/img";

const Hearder = () => {
  return (
    <>
      <div className={`${style.row} items-center justify-between w-full`}>
        <div className={`${style.row} items-center gap-x-8`}>
          <h1 className={`border-r-4 border-black pr-2 font-bold text-lg`}>
            خرید
          </h1>
          <Date />
        </div>
        <div className={`${style.row} items-center gap-x-5`}>
          <div
            className={`${style.row} bg-white items-center justify-between px-4 w-[360px] py-1 font-medium rounded-md drop-shadow-xl`}
          >
            <input
              type="text"
              placeholder="جستجو..."
              className={`outline-none px-5 py-2`}
            />
            <button>
              <CiSearch className={`text-3xl`} />
            </button>
          </div>
          <Link to="BuyFactor">
          <button
            className={`text-white  font-medium bg-btn py-3 px-4 rounded-md`}
          >
            {/* <link rel="" ="" /> */}
    
            ثبت فاکتور خرید
          </button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Hearder;
