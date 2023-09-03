import React, { Component, useState } from 'react'
import {BsChevronCompactDown} from  'react-icons/bs'
import DownVictore from '../../assets/image/DownVictore.svg'
const List = ()=>{
    const [show,setShow] = useState(false)
    const [show_2,setShow_2] = useState(false)
    return(
        <div className="w-full flex flex-row justify-start items-start ">
            <div className="flex flex-col  mt-2">
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#F2F8FE] rounded-md mb-2">no</div>
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#FAFAFA]  mb-2">1</div>
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#FAFAFA]  mb-2">2</div>
            </div>

            <div className="flex flex-col  item-center  w-[89%] mr-5 ">
                <div className=" w-full flex flex-row justify-around mb-2 mt-2">
                     <div className=""><input type="text" placeholder="نام جنس فروخته شده" className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue focus:border-[2px]" /></div>
                     <div className=""><input type="text" placeholder="واحد" className="w-[170px] h-[42px]   rounded-md py-[10px] px-[12px]  bg-[#F2F8FE] text-right outline-none  focus:border-B-blue   focus:border-[2px]"/></div>
                     <div className=""><input type="text" placeholder="تعداد" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] "/></div>
                     <div className=""><input type="text" placeholder="قیمت فی" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] " /></div>
                     <div className=""><input type="text" placeholder="مجموعه کل" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] "/></div>
                </div>
                <div className=" w-full flex flex-row justify-around mb-2 mt-2">
                     <div className=""><input type="text" placeholder="نام جنس فروخته شده" className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none" /></div>
                     <div className=""><input type="text" placeholder="واحد" className="w-[170px] h-[42px]  rounded-md py-[10px] px-[12px]  bg-[#FAFAFA] text-right outline-none "/></div>
                     <input className="flex flex-row justify-center items-center w-[170px] h-[42px]   rounded-md py-[10px] px-[12px]  bg-[#FAFAFA] text-right outline-none" placeholder='تعداد'/>
                     <div className=""><input type="text" placeholder="قیمت فی" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input type="text" placeholder="مجموعه کل" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                </div>

                <div className=" w-full flex flex-row justify-around mb-2 mt-2 ">
                
                <select className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none">
                  <option value="">آب انار</option>
                  <option value="">مونا</option>
                  <option value="">کلوجه</option>
                  <option value="">بیسکویت</option>
                </select> 
                <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
               
                <select className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none">
                  <option value="volvo">قیمت فی</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select> 

                <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>

                </div>
            </div>
        </div>
    )
}
export default List