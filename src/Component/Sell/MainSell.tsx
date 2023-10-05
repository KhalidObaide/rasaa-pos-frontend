import React from "react";
import ListSell from "./ListSell.jsx";
import axios from "axios";
import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Date from "../../components/Date/Date";
const Sell = () => {
  const [payBelAmount,setPayBalAmount] = useState()
  const [sellerName,setSellerName] = useState()
  const [factorInvoice,setFactorInvoice] = useState()

  // the Each single Factor info
  const [factorInfo,setFactorInfo] = useState([])


  const jwt = localStorage.getItem('jwt')

  const EmployeeData = {
    invoice_num: factorInvoice,
    contact: sellerName,
    date: 'data',
    buy: "buy",
    remaining: 0,
    total_amount: payBelAmount,
    discount: 'discount',
    taxes: 'taxs',
    payable_amount: payBelAmount,
    invoice_items: factorInfo
  };
  const handelSaveMethod = () => {
    console.log(EmployeeData);
    
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




  return (
    <>
      <div className="m-5 shadow-md shadow-[rgb(235, 235, 235)  rounded-lg p-5 ">
        <div className="flex flex-row-reverse justify-between item-center w-full">
            <Link to="/sell">
          <div className=" cursor-pointer flex flex-row jusify-center items-center  bg-[#F5F5F5] py-3 px-3 rounded-md ">
              <p className="text-[#999999]">بازگشت</p>
            <HiChevronLeft className="text-gray-400"/>
          </div>
            </Link>
          <div className="  flex flex-row-reverse justify-center items-center ">
            <h1 className="font-Estedad font-semibold text-lg">فاکتور خرید</h1>
            <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center items-start mt-16 ">
          {/* the nav inputs */}
          <div className="flex flex-row justify-center items-center">
            <div className="">
              <h1 className="font-semibold text-lg mb-2">مشخصات فاکتور</h1>
            </div>
            <div className="flex flex-row  w-3/4 mr-10">
              <input
                type="text"
                className="w-96 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
                placeholder="نام فروشنده"
                value={sellerName}
                onChange={(e)=>setSellerName(e.target.value)}
              />
                <input
                  type="text"
                  className="w-96 h-12  py-2 px-2 pr-5 text-rightborder-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
                  placeholder="شماره فاکتور"
                  value={factorInvoice}
                  onChange={(e)=>setFactorInvoice(e.target.value)}
                />
              <Date/>
            </div>
          </div>
          <div className="flex flex-row justify-center items-start mt-10 mr-20">
            <div className="">
              <h1>فاکتور خرید</h1>
            </div>
            <div className="mr-20">
              <ListSell setPayBalAmount = {setPayBalAmount} factorInfo={factorInfo} />
            </div>
          </div>
        </div>

        <div className="w-ful text-left pl-24 mt-10 text-lg font-semibold">
          <h1>
            مجموعه کل : <span className="text-btn">{payBelAmount}</span> افغانی
          </h1>
        </div>
        {/* the subment Butoons */}
        <div className="w-full text-left pl-24 mt-10">
          <button className="bg-grayLine  text-graybutton text-lg py-2 px-4 mb-2 font-medium rounded-md ">
            لغو
          </button>
          <button onClick={()=>handelSaveMethod()} className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5">
            ثبت کردن
          </button>
        </div>
      </div>
    </>
  );
};
export default Sell;
