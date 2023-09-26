import React, { useState } from "react";
import { style } from "../../assets/style/styles";
import { Link } from "react-router-dom";
export const BodySell = ({ pageNext, data, currentItems }: any) => {
  let num = 0;
  let num2 = 0;
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
          {currentItems === undefined ? (
            <div className="w-full flex flex-row items-center justify-center h-[50px] my-[100px]">
              <div className="loader"></div>
            </div>
          ) : (
            currentItems.map((item: any, index: any) => {
              const deCode = JSON.parse(item.invoice_items);
              deCode.map((item: any , index:any) => {
                num = item.price * item.amount;
                num2 += num;
              });
              return (
                <Link
                  to={`/itemFactor/sell?id=${item.id}`}
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
                      }   w-1/5 h-[48px] `}
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
                      }   w-1/5 h-[48px] `}
                    >
                      {item.date}
                    </div>
                    <div
                      key={index}
                      className={`${style.chart} ${
                        index % 2 ? "bg-gray-100" : "bg-white"
                      }   w-1/5 h-[48px]`}
                    >
                      {deCode.length}
                    </div>
                    <div
                      key={index}
                      className={`${style.chart} ${
                        index % 2 ? "bg-gray-100" : "bg-white"
                      }  w-1/5 h-[48px] `}
                    >
                      {num2}
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
