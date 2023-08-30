import React from "react";
import { style } from "../../../assets/style/styles";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { BiEdit , BiPrinter , BiTrashAlt , BiCheck , BiChevronRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const HeaderFac = ({
  setOpen,
  setData,
  arr,
  setEdit,
  setArr,
  data,
  edit,
}: any) => {
  const removingAll = () => {
    setOpen(true);
  };
  const saveEdit = () => {
    setData(arr);
    setEdit(true);
  };
  console.log(data)
  const editF = () => {
    setEdit(false);
  };
  const rejectEdit = () => {
    setArr(data);
    setEdit(true);
  };
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
    <Link to="/" className={`${style.row} items-center `}>
      <BiChevronRight className="text-xl "/>
      <p>بازگشت</p>
      <hr className="w-full mr-3 border border-[#DADADA]" />
    </Link>
      <div className={`${style.col} p-5 `}>
        <div className={`${style.row}`}>
          <div className={`${style.row} justify-between items-center w-full`}>
            <div className={`${style.row} items-center `}>
              <h1 className={`border-r-2 border-black pr-2 `}>نمایش فاکتور</h1>
            </div>
            <div
              className={`${style.row} items-center gap-x-2 ${
                edit == false ? "hidden" : "flex"
              }`}
            >
              <button
                className={`px-[12px] py-[11px] border border-gray-500 rounded-md `}
                onClick={handlePrint}
              >
                <BiPrinter className="text-gray-900 text-2xl" />
              </button>
              <button
                className={`px-[12px] py-[11px] border border-green-500 rounded-md`}
                onClick={editF}
              >
                <BiEdit className="text-green-500 text-2xl" />
              </button>
              <button
                className={`px-[12px] py-[11px] border border-red-500 rounded-md`}
                onClick={removingAll}
              >
                <BiTrashAlt className="text-red-500 text-2xl" />
              </button>
            </div>
            <div
              className={`${edit == true ? "hidden" : "flex"} ${
                style.row
              } items-center gap-x-3`}
            >
              <button
                onClick={saveEdit}
                className={`border rounded-md border-[#52C181] py-[11px] px-[12px]`}
              >
                < BiCheck className="text-green-500 text-2xl" />
              </button>
              <button
                onClick={rejectEdit}
                className={`border rounded-md border-red-500 py-[11px] px-[12px]`}
              >
                <CgClose className="text-2xl text-red-500" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${style.row} items-center justify-start gap-x-10 mt-5`}
        >
          <div className={`${style.row} items-center gap-x-2`}>
            <h3 className={`text-black font-medium`}>نام مشتری:</h3>
            <p className={`text-gray_fac`}>انبار مرکزی</p>
          </div>
          <div className={`${style.row} items-center gap-x-2`}>
            <h3 className={`text-black font-medium`}>شماره فاکتور:</h3>
            <p className={`text-gray_fac`}>3456</p>
          </div>
          <div className={`${style.row} items-center gap-x-2`}>
            <h3 className={`text-black font-medium`}>تاریخ:</h3>
            <p className={`text-gray_fac`}>1401/12/12</p>
          </div>
          <div className={`${style.row} items-center gap-x-2`}>
            <h3 className={`text-black font-medium`}>واحد پول:</h3>
            <p className={`text-gray_fac`}>افغانی</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderFac;
