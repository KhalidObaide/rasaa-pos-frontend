import React from "react";
import { style } from "../../../assets/style/styles";
import { Link } from "react-router-dom";
import {
  BiEdit,
  BiPrinter,
  BiTrashAlt,
  BiCheck,
  BiChevronRight,
  BiChevronLeft
} from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useParams } from 'react-router-dom';
const HeaderFactorItemSell = ({
  setOpen,
  setData,
  arr,
  setEdit,
  setArr,
  data,
  edit,
  id,
}: any) => {
  const removingAll = () => {
    setOpen(true);
  };
  const saveEdit = () => {
    setData(arr);
    setEdit(true);
  };
  console.log(data);
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
      <div className={`${style.row} items-ceter`}>
        <div className={`${style.row} justify-between items-center w-full`}>
          <div className={`${style.row} items-center `}>
            <h1 className={`border-r-2 border-black pr-2 font-bold `}>نمایش فاکتور</h1>
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
              <BiCheck className="text-green-500 text-2xl" />
            </button>
            <button
              onClick={rejectEdit}
              className={`border rounded-md border-red-500 py-[11px] px-[12px]`}
            >
              <CgClose className="text-2xl text-red-500" />
            </button>
          </div>
        </div>
        <Link to="/page2" className={`bg-[#F5F5F5] mr-4 py-3 px-3 ${ edit == false ? "hidden" : "flex"} text-[#999999] ${style.row} items-center rounded-md`}>
        بازگشت
        <BiChevronLeft className="text-xl" />
        </Link>
      </div>
    </>
  );
};

export default HeaderFactorItemSell;
