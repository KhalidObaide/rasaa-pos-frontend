import React, { useState } from "react";
import { style } from "../../../assets/style/styles";
import { CiCircleRemove } from "react-icons/ci";
const BodyItem = ({ arr, setArr, edit }: any) => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [Employees, setEmployeeOvertime] = useState([]);
  const [overTime, setOvertime] = useState([]);

  let totalPages = Math.ceil(Employees.length / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentItems = Employees.slice(startIndex, endIndex);
  let overTimecurrentItems = overTime.slice(startIndex, endIndex);
  let nums = [...Array(totalPages + 1).keys()].slice(1);

  const pageNumbers = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage === 1) {
      pageNumbers.push(1, 2, 3);
    } else if (currentPage === totalPages) {
      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
    }
  }

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
          <div className={`${style.chartHeader} w-[8%] rounded-md font-bold`}>NO</div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>
            نام جنس
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>تعداد</div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>
            قیمت فی
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md font-bold`}>مجموع</div>
        </div>
        {arr.map(
          (
            item: {
              id: string | undefined;
              fName: string | number | readonly string[] | undefined;
              FNumber: string | number | readonly string[] | undefined;
              howMany: string | number | readonly string[] | undefined;
            },
            index:any
          ) => {
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
                  onClick={() => handleRemove(item.id)}
                >
                  <CiCircleRemove className={`text-3xl text-red-500`} />
                </button>
                <span
                  className={`${style.chart} w-[8%] rounded-md  bg-gray-100`}
                >
                  {index + 1}
                </span>
                <input
                  className={`${style.chart} w-[40%] rounded-md   bg-gray-100 ${
                    edit == false ? "text-gray-500" : "text-black"
                  }`}
                  onChange={(e) => {
                    handelChange(e.target.value, item.id, "fName");
                  }}
                  id={item.id}
                  value={item.fName}
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
                  value={item.FNumber}
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
                  value={item.howMany}
                  disabled={edit}
                  type="number"
                />

                <span
                  className={`${style.chart} w-[40%] rounded-md  bg-gray-100`}
                >
                  {item.FNumber * item.howMany}
                </span>
              </div>
            );
          }
        )}
        <div className={`w-full ${style.row} items-end justify-end mt-2`}>
          <div className={`text-xl`}>مجموع کل:</div>
          <div className={`mr-2 text-xl`}>
            <span className={`text-btn`}>25,000</span> افغانی
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyItem;
