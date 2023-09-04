import React, { Component, useState } from 'react'
import axios from 'axios';

// import Header from './Header'
import List from './List'
import { AiOutlineLeft } from "react-icons/ai";

import Date from './Date';
const BuyFactor2= ()=>{
    const [show,setshow] = useState(false)
    const handelStyle = ()=>{
        setshow(!show)
    }
    


    return(
     <div className=' m-5 shadow-md shadow-[rgb(235, 235, 235)  rounded-lg '>
        عهخبلیبیل
    </div> 
    )
}
export default BuyFactor2



// {/* <div className=' m-5 shadow-md shadow-[rgb(235, 235, 235)  rounded-lg '>
// <div className="w-full shadow-md shadow-[#0000.5] p-5 ">
//     <div>
//         <div className="flex flex-row-reverse justify-between item-center w-full">
//         <div className=" cursor-pointer flex flex-row-reverse jusify-center items-center  bg-[#F5F5F5] py-3 px-3 rounded-md ">
//             {/* <AiOutlineLeft className="mt-[3px] text-[#999999]"/> */}
//             <p className="text-[#999999]">بازگشت</p>
//         </div>
//            <div className="  flex flex-row-reverse justify-center items-center ">
//                <h1 className="font-Estedad font-semibold text-lg" >فاکتور خرید</h1>
//                <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
//            </div>
//         </div>
//     </div>
//     {/* // second header part */}
//     <div className="  flex flex-row-reverse justify-between items-center  mt-10  w-full">
//         <div className="flex flex-row justify-center items-center w-[80%] mr-3   ">
//             <div className=" rounded-md py-2 px-[12px]  text-right border-solid border-[#DADADA] border-2 outline-none focus:border-b-B-blue focus:border-[2px] mr-5">
//                 {/* <label htmlFor="" className='w-full bg-red-200 text-center '><Date/></label> */}
//             </div>
//        {/* the date component */}
//         <div className=""> <input  placeholder="شماره فاکتور" className=" bg-red-500 w-[350px] h-[44px] rounded-md py-4 px-[12px]  text-right border-solid border-[#DADADA] border-2 outline-none focus:border-b-B-blue  focus:border-[2px] mr-5"/></div>
//          <div className=""><input  placeholder="نام فروشنده" className="w-[350px] h-[44px] rounded-md py-4 px-[12px] text-right border-solid border-[#DADADA] border-2 outline-none focus:border-b-B-blue  focus:border-[2px] mr-5"/></div>
//         </div>
//         <div className=" pr-10 "><h1 className="font-semibold text-2xl  ">مشخصات فاکتور</h1></div>
//     </div>
//     <div className="h-full  flex flex-row-reverse justify-between items-center mt-14">
//         <List/>
//        <div className=" w-[420px] h-[150px] text-right pr-10  "><h1 className="font-bold text-2xl">اجناس</h1></div>
//     </div>

//     {/* // the last part if this page */}
//     <div className="flex flex-col justify center items-end mt-10 ">
//         <div className="ml-5 mb-7 ">
//           <span className="font-Estedad font-semibold text-base">  مجموعه کل</span>  : <span className="text-B-blue">25,000</span> افغانی
//         </div>
//         <div className="flex flex-row justify-start items-start ml-5">
//             <button className="mr-4  px-[10px] py-[10px] rounded-md bg-[#F5F5F5] text-black">لغو </button>
//             <button className="px-[8px] py-[10px] rounded-md bg-B-blue text-white mr-2">ثبت کردن</button>
//         </div>
//     </div>
// </div>
// </div> */}