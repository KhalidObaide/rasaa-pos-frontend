import React, { useState } from "react";
import ListSell from './ListSell.jsx'
import {HiChevronLeft} from 'react-icons/hi'
import { Link } from "react-router-dom";
// import Date from "../../components/Date/Date.js";
import Date from "../../components/Date/Date";
const Sell = ()=>{
    const [totalAmount,setTotalAmount] = useState()
    return(
        <>
           <div className="m-5 shadow-md shadow-[rgb(235, 235, 235)  rounded-lg p-5 ">
                <div className="flex flex-row-reverse justify-between item-center w-full">
                    <Link to="/sell">
                    {/* <AiOutlineLeft className="mt-[3px] text-[#999999]"/> */}
                <div className=" cursor-pointer flex flex-row jusify-center items-center  bg-[#F5F5F5] py-3 px-3 rounded-md ">
                    <p className="text-[#999999]">بازگشت</p>
                    <HiChevronLeft className="text-[#999999]"/>
                </div>
                    </Link>

                   <div className="  flex flex-row-reverse justify-center items-center ">
                       <h1 className="font-Estedad font-semibold text-xl" >فاکتور فروش</h1>
                       <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
                   </div>
                </div>
                <div className=" w-full flex flex-col justify-center items-start mt-16 ">
                    {/* the nav inputs */}
                    <div className="flex flex-row justify-center items-center">
                        <div className=""><h1 className="font-semibold text-lg mb-2">مشخصات فاکتور</h1></div>
                                 <div className="flex flex-row  w-3/4 mr-10">
                                     <input
                                type="text"
                                className="w-[520px] h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg " 
                                placeholder="نام فروشنده"
                                // value={sellerNmae}
                                // onChange={(e)=>setSellerName(e.target.value)}
                                />
                                <div className=" flex flex-row justify-center items-center">
                                    <input
                                    type="text"  
                                    className="w-[351px] h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg "
                                    placeholder="شماره فاکتور"
                                    // value={FactorInvoice}
                                    />
                                </div>
                                    <div className="mx-3">
                                        <Date />
                                    </div>
                            </div>
                        </div>    
                        <div className="flex flex-row justify-center items-start mt-10 mr-20">
                            <div className=""><h1 className="font-medium">اجناس</h1></div>
                            <div className="mr-20">

                            <ListSell setTotalAmount = {setTotalAmount}  />

                            </div>
                        </div>
                </div>
                  
                   <div className="w-ful text-left pl-24 mt-10 text-lg font-semibold"><h1>مجموعه کل : <span className="text-btn">{totalAmount}</span> افغانی</h1></div>
                   {/* the subment Butoons */}
                  <div className="w-full text-left pl-24 mt-10">
                    <button className="bg-grayLine  text-graybutton text-lg py-2 px-4 mb-2 font-medium rounded-md ">لغو</button>
                    <button className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5">ثبت کردن</button>

                  </div>
            </div>
        </>
    )
}
export default Sell

   