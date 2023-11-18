import React, { createContext, useRef } from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { GiCycle } from "react-icons/gi";
import { MdPublishedWithChanges } from "react-icons/md";
import SaveNewFac from "./saveFactro";
import List from "./List";
import { Link } from "react-router-dom";
import Date from "../../components/Date/Date";
import SaveTheFator from "./saveFactro";
const BuyFactor = () => {
  const [sellerNmae, setSellerName] = useState("");
  const [FactorInvoice, setFactorInvoic] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [discount, setDiscount] = useState("");
  const [taxs, setTaxs] = useState("");
  const [ProductInfo,setProductInfo] = useState([])
  const jwt = localStorage.getItem('jwt')
  // style
  const [showSaveM,setShowSaveM] = useState(false)
  const [emptyAllParent,setEmptyAllParent] = useState()
  // the select input style by use ref
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input5Ref = useRef(null)
  const input6Ref = useRef(null)
  const input7Ref = useRef(null)
  

// selecting the nexinput by use ref Function
const handleKeyPress = (event:any, ref:any) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (ref.current) {
      ref.current.focus();
    }
  }
};
useEffect(()=>{
  if (emptyAllParent) {
    emptyAllParentFunction()
  }

},[emptyAllParent])
  const emptyAllParentFunction = ()=>{
    setSellerName('')
    setFactorInvoic('')
    setDiscount('')
    setTaxs('')
    setProductInfo([])
  }
  // genetating the funcor invoice Num
  const [totalAmount, setTotalAmount] = useState("");
  const calculat = (totalAmount * discount) / 100;
  const filterPaybelAmount = totalAmount - calculat + taxs;
// seeding the data of this fator to Api
  const EmployeeData ={
    invoice_num: 5,
    contact: sellerNmae,
    date: currentDate,
    buy: 'buy',
    remaining: 0,
    total_amount: totalAmount,
    discount: discount,
    taxes: taxs,
    payable_amount: filterPaybelAmount,
    invoice_items: ProductInfo
}
  // save button function 
  const handelSaveMethod = async () => {
    console.log(EmployeeData);
    
    console.log(EmployeeData);
    
    setShowSaveM(true)
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
      }
  }
  const GenerateFactorInvoice = () => {
    const FactorInioce = Math.floor(100000 + Math.random() * 900000);
    setFactorInvoic(FactorInioce);
  };
  return (
      <div className="flex flex-col justify-start items-center w-full p-5  shadow-md shadow-shadow rounded-lg">
        {/* the header part */}
          <div className=" w-full flex flex-row justify-start items-start">
            <div className="bg-black w-1 h-9 ml-2 rounded-md "></div>
            <h1 className="font-semibold text-2xl">فاکتور خرید</h1>
        </div>
        {/* the input sections */}

            <div className=" w-full flex flex-row justify-around items-start">
              <div className="flex flex-col justify-center items-center">
              <h1 className="mt-10 mb-28 ml-10 text-xl">فاکتور خرید</h1>
              <h1 className="mr-10">نام جنس</h1>
            </div>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-row flex-wrap w-full mb-20 mt-10 ">
              <input
                type="text"
                className="w-96 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
                ref={input1Ref}
                onKeyPress={(e) => handleKeyPress(e, input2Ref)}
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
                <button   ref={input2Ref} onClick={() => GenerateFactorInvoice()} className="">
                  <MdPublishedWithChanges className="w-10 h-10 text-btn" />
                </button>
              </div>
              <div className="mx-3">
                <Date setCurrentDate = {setCurrentDate} />
              </div>
            </div>
            <List
            ProductInfo={ProductInfo}
              setTotalAmount={setTotalAmount}
              // EmployeeData = {EmployeeData}
              setEmptyAllParent= {setEmptyAllParent}
              showSaveM= {showSaveM}
              setShowSaveM= {setShowSaveM}
            />
          </div>
        </div>
        {/* the totla amount */}
        <div className="w-full text-left ml-96 mt-10 text-lg font-semibold">
          <h1>
            مجموعه کل : <span className="text-btn">{totalAmount || 0}</span> افغانی
          </h1>
        </div>
        {/* the taz and final calculat */}
        <div className=" w-[1210px] flex flex-row justify-center items-start mt-16  mr-20 pr-6">
          {/* the sub title */}
          <div className=" w-full flex flex-row flex-wrap justify-center items-center p-2">
            <div className=" w-[30%] flex flex-col justify-start items-start   mx-4">
              <h1 className="mr-2  text-lg mb-2  text-textGray ">
                مبلغ تخفیف :{" "}
              </h1>
              <input
                ref={input5Ref}
                onKeyPress={(e) => handleKeyPress(e, input6Ref)}
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                type="text"
                className="w-full h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
              />
            </div>
            <div className=" w-[30%] mx-4 flex flex-col justify-start items-start">
              <h1 className="mr-2 text-lg mb-2  text-textGray">مالیات : </h1>
              <input
                ref={input6Ref}
                onKeyPress={(e) => handleKeyPress(e,input7Ref)}
                value={taxs}
                onChange={(e) => setTaxs(Number(e.target.value))}
                type="text"
                className="w-full h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "
              />
            </div>
            <div className="w-[30%] flex flex-col justify-start items-start  ">
              <h1 className="mr-2  text-lg mb-2  text-textGray">
                قابل پرداخت :{" "}
              </h1>
              <input
                type="text"
                value={filterPaybelAmount}
                className="w-full h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg  "
              />
            </div>
          </div>
        </div>
        {/* the subment buttons */}
        <div className="w-full flex flex-row justify-end items-center ml-52 pl-2 mt-12 px-5 m ">
          <Link to={"../"}>
            <button
              // onClick={() => handelcal()}
              className="bg-grayLine  text-graybutton text-lg py-2 px-4 mb-2 font-medium rounded-md "
            >
              لغو
            </button>
          </Link>
          <button
          ref={input7Ref}
            onClick={() => handelSaveMethod()}
            className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5"
          >
            ثبت کردن
          </button>
        </div>
      
    </div>
  );
};
export default BuyFactor;
