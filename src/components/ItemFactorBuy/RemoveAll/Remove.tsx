import React from "react";
import { style } from "../../../assets/style/styles";
import { Link } from "react-router-dom";

const Remove = ({setOpen , open}:any) => {
  const renoveF = () => {
    //   localStorage.clear("items");
  };
  const reject = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className={` absolute top-0 left-0 right-0 bottom-0 ${
          style.row
        } items-center justify-center w-full ${
          open == true ? "flex" : "hidden"
        } bg-[rgba(0,0,0,0.3)] h-[100%]`}
      >
        <div className={`w-[25%] bg-white rounded-xl`}>
          <div
            className={`bg-error text-center rounded-t-xl ${style.row} items-center justify-center py-6 w-full`}
          >
            !
          </div>
          <div
            className={`${style.col} items-center justify-center gap-y-5 p-5`}
          >
            <h1 className={`font-bold text-2xl`}>هشدار !</h1>
            <p className={`w-full font-bold text-[#616161]`}>
              آیا از حذف جنس مطمئن هستید؟!
            </p>
            <div
              className={`${style.row} items-center justify-end w-full gap-x-4`}
            >
              <button
                className={`px-4 py-2 bg-gray-100 rounded-md`}
                onClick={reject}
              >
                لغو
              </button>
              <Link to="/sell">
                <button
                  className={`px-5 py-2 text-white rounded-md bg-error`}
                  onClick={renoveF}
                >
                  حذف کردن
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remove;
