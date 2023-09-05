import React, { useState } from "react";
import { style } from "../../assets/style/styles";
import Text from "../Text";
import { Link } from "react-router-dom";
export const BodyBuy = ({ pageNext , data , currentItems }: any) => {
  return (
    <>
      <div
        className={`${style.col} items-start mt-5 w-full ${
          pageNext == true ? "hidden" : "flex"
        }`}
      >
        <div className={`${style.row} items-center p-0 w-full`}>
          <div className={`${style.chartHeader} w-10`}>NO</div>
          <div className={`${style.chartHeader} w-1/5`}>نام فروشنده</div>
          <div className={`${style.chartHeader} w-1/5`}>شماره فاکتور</div>
          <div className={`${style.chartHeader} w-1/5`}>تاریخ</div>
          <div className={`${style.chartHeader} w-1/5`}>تعداد اقلام</div>
          <div className={`${style.chartHeader} w-1/5`}>مجموع کل</div>
        </div>
        <div className={`${style.col} items-center p-0 w-full`}>
          {currentItems == null
            ? ""
            : currentItems.map((item:any, index:any) => {
                return (
                  <Link
                    to="/itemFactor"
                    className={`${style.row} items-center p-0 w-full`}
                  >
                    <div className={`${style.row} items-center p-0 w-full`}>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }  w-10 `}
                      >
                        {index + 1}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }   w-1/5 h-[48px]`}
                      >
                        {item.contact}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }  w-1/5 h-[48px]`}
                      >
                        {item.invoice_num}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }   w-1/5`}
                      >
                        {item.date}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }   w-1/5 h-[48px]`}
                      >
                        {item.payable_amount}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }  w-1/5 h-[48px]`}
                      >
                        {item.remaining}
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    </>
  );
};
