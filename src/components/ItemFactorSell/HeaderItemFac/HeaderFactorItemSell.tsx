import React, { useEffect, useState } from "react";
import { style } from "../../../assets/style/styles";
import { Link } from "react-router-dom";
import {
  BiEdit,
  BiPrinter,
  BiTrashAlt,
  BiCheck,
  BiChevronLeft,
} from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import axios from "axios";
import { getJWT } from "../../../shared";
import appSettings from "../../../app.settings.json";

const HeaderFactorItemSell = ({
  setOpen,
  setData,
  arr,
  setEdit,
  setArr,
  data,
  edit,
}: any) => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const removingAll = () => {
    setOpen(true);
  };
  const saveEdit = () => {
    setData(arr);
    setEdit(true);
  };
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
  const [headerData, setHeaderData] = useState([]);

  const jwt = getJWT();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${appSettings.api}invoice?id=${id}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setHeaderData(data[0]);
        } else {
          console.log("Received status:", response.status);
        }
      } catch (error) {
        console.error("Error details:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className={`${style.row} items-ceter`}>
        <div className={`${style.row} justify-between items-center w-full`}>
          <div className={`${style.row} items-center `}>
            <h1 className={`border-r-4 border-black pr-2 font-bold `}>
              نمایش فاکتور
            </h1>
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
        <Link
          to="/Sell"
          className={`bg-[#F5F5F5] mr-4 py-3 px-3 ${
            edit == false ? "hidden" : "flex"
          } text-[#999999] ${style.row} items-center rounded-md`}
        >
          بازگشت
          <BiChevronLeft className="text-xl" />
        </Link>
      </div>
      <div className={`${style.row} items-center gap-x-5 mt-5`}>
        <div className={`${style.row} items-center gap-x-3`}>
          <p className={`font-bold`}>نام مشتری:</p>
          <p>{headerData == undefined ? "" : headerData.contact}</p>
        </div>
        <div className={`${style.row} items-center gap-x-3`}>
          <p className={`font-bold`}>شماره فاکتور:</p>
          <p>{headerData == undefined ? "" : headerData.invoice_num}</p>
        </div>
        <div className={`${style.row} items-center gap-x-3`}>
          <p className={`font-bold`}>تاریخ:</p>
          <p>{headerData == undefined ? "" : headerData.date}</p>
        </div>
      </div>
    </>
  );
};

export default HeaderFactorItemSell;
