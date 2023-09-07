import React, { Component } from 'react'
import {useState} from "react"
// import React from "react";



const List  = ({sellerNmae,setSellerName,number,setNumber,pricePer,setPricePer}:any)=>{
    const [calculate,setCaliculat] = useState(pricePer*number)
    let nano = pricePer*number
    console.log(nano);
    
    
    return(
        <div className="flex flex-col ml-16 ">
            <div className="flex flex-row  items-center mb-2">
              <div className="flex flex-row justify-center items-center rounded-md w-10 h-10 bg-chart  font-normal mx-2 ">No</div>
              <div className="w-72 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart   " value={sellerNmae} onChange={(e)=>setSellerName(Number(e.target.value))} >نام جنس فروخته شده</div>
              <div className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart ">تعداد</div>
              <div className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart ">قیمت فی</div>
              <div className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart ">مجموعه</div>
            </div>
            <div className="flex flex-row  items-center mb-2">
              <div className="flex flex-row justify-center items-center rounded-md bg-chart font-normal mx-2 "><p className="w-10 h-10 flex flex-row justify-center items-center">1</p></div>
              <input type="text" className="w-72 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine" />
              <input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine" value={number} onChange={(e)=>setNumber(e.target.value)}/>
              <input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine" value={pricePer} onChange={(e)=>setPricePer(e.target.value)}/>
              <input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine" value={nano}/>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row justify-center items-center rounded-md bg-chart font-normal mx-2"><p className="w-10 h-10 flex flex-row justify-center items-center">2</p></div>
                  <input type="text" className="w-72 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg  outline-none bg-grayLine "/>
              <div className=""><input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine"/></div>
              <div className=""><input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine"/></div>
              <div className=""><input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine"/></div>
            </div>
        </div>
    )
}
export default List