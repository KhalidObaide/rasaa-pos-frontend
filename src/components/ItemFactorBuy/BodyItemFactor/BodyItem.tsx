import React, { useEffect, useState } from "react";
import { style } from "../../../assets/style/styles";
import { CiCircleRemove } from "react-icons/ci";
import axios from "axios";
import ItemChanges from "../../../Component/Utilites/Changes";
const BodyItem = ({ arr, setArr, edit }: any) => {
  //------------------------------------------------------
  const handleRemove = (itemId: any) => {
    const updatedItems = arr.filter((item: { id: any }) => item.id !== itemId);
    setArr(updatedItems);
  };
  const handelChange = (
    value: string,
    id: string | undefined,
    input: string
  ) => {
    if (input === "fName") {
      let copyarr = arr.map((item: { id: any }) =>
        item.id == id ? { ...item, fName: value } : item
      );
      setArr(copyarr);
    } else if (input === "FNumber") {
      let copyarr = arr.map((item: { id: any }) =>
        item.id == id ? { ...item, FNumber: value } : item
      );
      setArr(copyarr);
    } else if (input === "howMany") {
      let copyarr = arr.map((item: { id: any }) =>
        item.id == id ? { ...item, howMany: value } : item
      );
      setArr(copyarr);
    }
  };
  //-----------------------------------
  let num = 0;
  let num2 = 0;
  return (
    <>
      <div className={`${style.col}`}>
        <div
          className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}
        >
          <div
            className={`${
              (style.chart, style.row)
            } cursor-auto w-[81px] h-[46px] py-2 rounded-md bg-gray-100 ${
              edit == true ? "hidden" : "flex"
            }`}
          ></div>
          <div className={`${style.chartHeader} w-[8%] rounded-md font-bold`}>
            NO
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>
            نام جنس
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>
            تعداد
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>
            قیمت فی
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>
            مجموع
          </div>
        </div>
        {arr == null ? (
          <div className="w-full flex flex-row items-center justify-center h-[50px] my-[100px]">
            <div className="loader"></div>
          </div>
        ) : (
          arr.map((item: any, index: any) => {
            const deCode = JSON.parse(item.invoice_items);
            return deCode.map((item: any, index: any) => {
              num = item.price * item.amount;
              num2 += num;
              return (
                <div
                  className={`w-full gap-x-5 py-3 h-auto ${style.row} items-center`}
                >
                  <button
                    className={`${
                      (style.chart, style.row)
                    } cursor: text px-2 py-2 rounded-md bg-gray-100 ${
                      edit == true ? "hidden" : "flex"
                    }`}
                    onClick={() => handleRemove(item.id, index)}
                  >
                    <CiCircleRemove className={`text-3xl text-red-500`} />
                  </button>
                  <span
                    className={`${style.chart} w-[8%] rounded-md  bg-gray-100`}
                  >
                    {index + 1}
                  </span>
                  <input
                    className={`${
                      style.chart
                    } w-[40%] rounded-md   bg-gray-100 ${
                      edit == false ? "text-gray-500" : "text-black"
                    }`}
                    onChange={(e) => {
                      handelChange(e.target.value, item.id, "fName");
                    }}
                    id={item.id}
                    value={item.title}
                    disabled={edit}
                  />
                  <input
                    onChange={(e) => {
                      handelChange(e.target.value, item.id, "FNumber");
                    }}
                    className={`${style.chart} w-[40%] rounded-md ${
                      edit == false ? "text-gray-500" : "text-black"
                    }  bg-gray-100`}
                    id={item.id}
                    value={item.amount}
                    disabled={edit}
                    type="number"
                  />
                  <input
                    onChange={(e) => {
                      handelChange(e.target.value, item.id, "howMany");
                    }}
                    className={`${style.chart} w-[40%] rounded-md ${
                      edit == false ? "text-gray-500" : "text-black"
                    }  bg-gray-100`}
                    id={item.id}
                    value={item.price}
                    disabled={edit}
                    type="number"
                  />

                  <span
                    className={`${style.chart} w-[40%] rounded-md  bg-gray-100`}
                  >
                    {item.price * item.amount}
                  </span>
                </div>
              );
            });
          })
        )}
        <div className={`w-full ${style.row} items-end justify-end mt-2`}>
          <div className={`text-xl`}>مجموع کل:</div>
          <div className={`mr-2 text-xl`}>
            <span className={`text-btn`}>{num2}</span> افغانی
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyItem;
