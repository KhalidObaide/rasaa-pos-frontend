import React from "react";
import { Link } from "react-router-dom";
import { style } from "../../../assets/style/styles";
import { CiWarning } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";

const RemoveAllSell = ({ open, setOpen }: any) => {
  const renoveF = () => {
    //   localStorage.clear("items");
  };
  const reject = () => {
    const jwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzQ1Mzk2OCwianRpIjoiN2U5MmYzYmMtZWQzYy00YjdlLTlhMDctYTMxYTIyNmRjYmMyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzQ1Mzk2OCwiZXhwIjoxNjkzNTQwMzY4fQ.vbIP9wznDZyE8hM7TpML1VHREGPJV9E4097dgtFIrM8";

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            `https://lajward-mis.dev:8005/invoices`,
            {
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            }
          );

          if (response.status === 200) {
            console.log("Data fetched successfully:", response.data);
            setData(response.data);
          } else {
            console.log("Received status:", response.status);
            console.log(response.data);

            console.log();
          }
        } catch (error) {
          // console.log("Error message:", error.message);
          console.error("Error details:", error);
        }
      }

      fetchData();
    }, []);
  };
  return (
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
          <CiWarning className="text-[80px] text-white" />
        </div>
        <div className={`${style.col} items-center justify-center gap-y-5 p-5`}>
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
  );
};

export default RemoveAllSell;
