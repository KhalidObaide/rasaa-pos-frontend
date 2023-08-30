import React, { useState } from "react";
import { style } from "../../assets/style/styles";
import { CiSearch } from "react-icons/ci";

// import {  Print , Cross , Remove , Edit , Check } from "../../assets/img";

const Hearder = () => {
  return (
    <>
      <div className={`${style.row} items-center justify-between w-full`}>
        <div className={`${style.row} items-center gap-x-5`}>
          <h1 className={`border-r-2 border-black pr-2 font-bold text-lg`}>
            خرید
          </h1>
          <input type="date" />
        </div>
        <div className={`${style.row} items-center gap-x-5`}>
          <div
            className={`${style.row} bg-white items-center justify-between px-5 w-80 py-2 font-medium rounded-md drop-shadow-xl`}
          >
            <input
              type="text"
              placeholder="جستجو..."
              className={`outline-none px-5  py-[12px]`}
            />
            <button>
              <CiSearch className={`text-3xl`} />
            </button>
          </div>
          <button
            className={`text-white  font-medium bg-btn py-4 px-5 rounded-md`}
          >
            ثبت فاکتور فروش
          </button>
        </div>
      </div>
    </>
  );
};

export default Hearder;
