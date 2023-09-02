import React, { useState } from "react";
import { style } from "../../assets/style/styles";
import { CiSearch } from "react-icons/ci";

const HeaderSell = () => {


  return (
    <>
      <div className={`${style.row} items-center justify-between w-full`}>
        <div>
          <h1 className={`border-r-2 border-black pr-2 font-bold text-lg`}>
            فروش
          </h1>
        </div>
        <div className={`${style.row} items-center`}>
          <div className={`${style.row} items-center gap-x-5`}>
            <div
              className={`${style.row} bg-white items-center justify-between px-5 w-[360px] font-medium rounded-md drop-shadow-xl`}
            >
              <input
                type="text"
                placeholder="جستجو..."
                className={`outline-none px-5   py-3`}
              />
              <button>
                <CiSearch className={`text-3xl`} />
              </button>
            </div>
            <button
              className={`text-white  font-medium bg-btn py-3 px-4 rounded-md`}
            >
              ثبت فاکتور فروش
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSell;
