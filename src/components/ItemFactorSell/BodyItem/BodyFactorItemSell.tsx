import React, { useEffect, useState } from "react";
import { style } from "../../../assets/style/styles";
import { CiCircleRemove } from "react-icons/ci";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getJWT } from "../../../shared";
const BodyFactorItemSell = ({ edit, id }: any) => {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState(data);

  const jwt = getJWT()


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://lajward-mis.dev:8005/invoice?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        if (response.status === 200) {
          setData(response.data);
          setArr(response.data);
        } else {
          console.log("Received status:", response.status);
        }
      } catch (error) {
        // console.log("Error message:", error.message);
        console.error("Error details:", error);
      }
    }

    fetchData();
  }, []);
  const handleRemove = (itemId: any, index: any) => {
    const response = axios.get(
      `https://lajward-mis.dev:8005/invoice?index=${index}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (response.status === 200) {
      const updatedItems = arr.filter(
        (item: { id: any }, index) => index !== index
      );
      setArr(updatedItems);
      console.log(setArr);
    }
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
      <div className={`${style.col} mt-5`}>
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
          <div className={`${style.chartHeader} w-[8%] rounded-md`}>NO</div>
          <div className={`${style.chartHeader} w-[40%] rounded-md`}>
            نام جنس
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md`}>تعداد</div>
          <div className={`${style.chartHeader} w-[40%] rounded-md`}>
            قیمت فی
          </div>
          <div className={`${style.chartHeader} w-[40%] rounded-md`}>مجموع</div>
        </div>
        {arr == null
          ? ""
          : arr.map((item: any, index: any) => {
              const deCode = JSON.parse(item.invoice_items);
              return deCode.map((item: any, index: any) => {
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
            })}
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

export default BodyFactorItemSell;
