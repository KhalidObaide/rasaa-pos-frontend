import React, { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { GiCycle } from "react-icons/gi";
import { MdPublishedWithChanges } from "react-icons/md";
import SaveNewFac from "./saveFactro";
import List from "./List";
import { Link } from "react-router-dom";
import { MyDatePicker } from "./MyDatePicker";
import Date from "../../components/Date/Date";
// import { getJWT } from "../../shared";
const BuyFactor = () => {
  const [showSaveF, setShowSaveF] = useState(false);
  const [sellerNmae, setSellerName] = useState("");
  const [FactorInvoice, setFactorInvoic] = useState();
  const [data, setDate] = useState("14/66/89");
  const [productName, setProductName] = useState("");
  const [number, setNumber] = useState("");
  const [pricePer, setPricePer] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [taxs, setTaxs] = useState("");
  // arr of the each product factor
  const [ProductInfo,setProductInfo] = useState([])
  // geeting hte JWT
  const jwt = localStorage.getItem('jwt')

  // final preactice
  const [totalAmount, setTotalAmount] = useState("");
  const calculat = (totalAmount * discount) / 100;
  const filterPaybelAmount = totalAmount - calculat + taxs;

  const EmployeeData = {
    invoice_num: FactorInvoice,
    contact: sellerNmae,
    date: 'data',
    buy: "buy",
    remaining: 0,
    total_amount: totalPrice,
    discount: discount,
    taxes: taxs,
    payable_amount: totalAmount,
    invoice_items: ProductInfo
  };

  const handelSaveMethod = () => {
    const HandlPost = async () => {
      try {
        const token = jwt;
        const res = await axios({
          method: "post",
          url: `https://lajward-mis.dev:8005/invoices`,
          headers: { Authorization: `Bearer ${token}` },
          data: EmployeeData,
        });
  
        if (res.status === 200) {
         console.log(res.data);
         
        } else {
          alert("The request was not successful.");
        }
      } catch (error) {
        alert("مشکلی در پوست اطلاعات وجود دراد ");
      }
    };
    HandlPost()
  };
  const GenerateFactorInvoice = () => {
    const FactorInioce = Math.floor(100000 + Math.random() * 900000);
    setFactorInvoic(FactorInioce);
  };

  return (
      <div className="flex flex-col justify-start items-center  p-5 mx-5 shadow-md shadow-shadow rounded-lg">
        {/* the header part */}
        <div className=" w-full flex flex-row justify-between items-center ">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-black w-1 h-10 ml-2 rounded-md "></div>
            <h1 className="font-semibold text-2xl">فاکتور خرید</h1>
          </div>
        </div>
        {/* the input sections */}

        <div className=" w-full flex flex-row justify-around items-start">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mt-10 mb-28 ml-10 text-xl">فاکتور خرید</h1>
            <h1 className="mr-10">نام جنس</h1>
          </div>
          <div className="flex flex-col justify-center items-start ">
            <div className="flex flex-row flex-wrap   w-full mb-20 mt-10 ">
              <input
                type="text"
                className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
                placeholder="نام فروشنده"
                value={sellerNmae}
                onChange={(e) => setSellerName(e.target.value)}
              />
              <div className=" flex flex-row justify-center items-center">
                <input
                  type="text"
                  className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
                  placeholder="شماره فاکتور"
                  value={FactorInvoice}
                />
                <button onClick={() => GenerateFactorInvoice()} className="">
                  <MdPublishedWithChanges className="w-10 h-10 text-btn" />
                </button>
              </div>
              <div className="mx-3">
                <Date />
              </div>
            </div>
            <List
            ProductInfo={ProductInfo}
              setTotalAmount={setTotalAmount}
            />
          </div>
        </div>
        {/* the totla amount */}
        <div className="w-full text-left ml-96 mt-10 text-lg font-semibold">
          <h1>
            مجموعه کل : <span className="text-btn">{totalAmount}</span> افغانی
          </h1>
        </div>
        {/* the taz and final calculat */}
        <div className=" w-full flex flex-row fled justify-end items-start mt-16 ml-40">
          {/* the sub title */}
          <div className="flex flex-row flex-wrap justify-center items-center w-3/4 pr-5 mr-20">
            <div className="flex flex-col justify-start items-start">
              <h1 className="mr-2  text-lg mb-2  text-textGray">
                مبلغ تخفیف :{" "}
              </h1>
              <input
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                type="text"
                className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="mr-2 text-lg mb-2  text-textGray">مالیات : </h1>
              <input
                value={taxs}
                onChange={(e) => setTaxs(Number(e.target.value))}
                type="text"
                className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="mr-2  text-lg mb-2  text-textGray">
                قابل پرداخت :{" "}
              </h1>
              <input
                type="text"
                value={filterPaybelAmount}
                className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg  "
              />
            </div>
          </div>
        </div>
        {/* the subment buttons */}
        <div className="w-full flex flex-row justify-end items-center ml-52 pl-2 mt-12 px-5 m ">
          <Link to={"../"}>
            <button
              onClick={() => handelcal()}
              className="bg-grayLine  text-graybutton text-lg py-2 px-4 mb-2 font-medium rounded-md "
            >
              لغو
            </button>
          </Link>
          <button
            onClick={() => handelSaveMethod()}
            className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5"
          >
            ثبت کردن
          </button>
        </div>
        {showSaveF && <SaveNewFac />}
      </div>
  );
};
export default BuyFactor;
