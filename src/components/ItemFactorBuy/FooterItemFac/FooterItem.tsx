import React from "react";
import { style } from "../../../assets/style/styles";

const FooterItem = ({arr}:any) => {
  return (
    <>
      <div
        className={`${style.row} items-center justify-between w-full gap-x-10`}
      >
        <div className={`${style.col} w-1/3 gap-y-2 `}>
          <label htmlFor="off" className={` text-gray_fac `}>
            مبلغ تخفیف:
          </label>
          <div
            id="off"
            className={`w-full py-2 px-5 border border-gray-300 rounded-md outline-none font-bold h-[44px] `}
          >
            {
              arr == null ? "" : arr[0].discount

            }
          </div>
        </div>
        <div className={`${style.col} w-1/3 gap-y-2 `}>
          <label htmlFor="off" className={`text-gray_fac `}>
            مالیات:
          </label>
          <div
            id="off"
            className={`w-full py-2 px-5 border border-gray-300 rounded-md outline-none font-bold h-[44px]`}
          >
            {
              arr == null ? "" : arr[0].taxes
            }
          </div>
        </div>
        <div className={`${style.col} w-1/3 gap-y-2 `}>
          <label htmlFor="off" className={` text-gray_fac `}>
            قابل پرداخت:
          </label>
          <div
            id="off"
            className={`w-full py-2 px-5 border border-gray-300 rounded-md outline-none font-bold h-[44px]`}
          >
            {
              arr == null ? "" : arr[0].payable_amount

            }
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterItem;
