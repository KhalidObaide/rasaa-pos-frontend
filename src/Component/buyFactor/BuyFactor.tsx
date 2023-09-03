import React from "react";
import axios from "axios";
import {useState} from "react"
import {GiCycle} from 'react-icons/gi'
import SaveNewFac from "./saveFactro";
const BuyFactor = ()=>{
    const [showSaveF,setShowSaveF]  = useState(false)
    const [sellerNmae,setSellerName] = useState('')
    const [FactorInvoice,setFactorInvoic] = useState()
    const [data,setDate] = useState('14/66/89')
    const [unit,setUnit] = useState('')
    const [productName,setProductName] = useState('')
    const [numbe ,setNumber] = useState()
    const [pricePer,setPricePer] = useState("")
    const [totalPrice,setTotalPrice]= useState()
    const [discount,setDiscount] = useState("")
    const [taxs,setTaxs] = useState("")
    const [payebla,setPayebal] = useState("")
    const EmployeeData = {
        invoice_num: FactorInvoice,
            contact: "Test_5",
            date: data,
            buy: "buy",
            remaining: 0,
            total_amount: totalPrice,
            discount: discount,
            taxes: 0,
            payable_amount: 0,
            invoice_items: [
                {
                    title: productName,
                    amount: numbe,
                    price: pricePer
                }
            ]
        }
        
        const handelSaveMethod = ()=>{
            const HandlPost = async () => {
                // const calculate = numbe*pricePer
                // setTotalPrice(calculate)
                alert('start')
                // console.log(to);
                

                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzY1ODAxMiwianRpIjoiZmE5OGJhMDAtMTA0OS00NjlkLWI0OTYtODEyNGM0YTk3NmUwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzY1ODAxMiwiZXhwIjoxNjkzNzQ0NDEyfQ.Udw_mBinrklKl2vOXU7ZgvL7iTMBqTZlJukp7Sa_49Q"
                const res = await axios({
                    method:'post',
                    url : 'https://lajward-mis.dev:8005/invoices',
                    headers: { Authorization: `Bearer ${token}` },
                    data : EmployeeData
                })
                if(res.status === 200){
                    console.log(res.data);
                    
                    alert('Done')
                    console.log('hellow');
                }else{
                    alert('There was an Error')
                    console.log(res)
                }        
            };
            HandlPost()
        }
        const GenerateFactorInvoice= ()=>{
        const FactorInioce = Math.floor(100000 + Math.random() * 900000)    
        setFactorInvoic(FactorInioce)
        }
    return(
        <div className='flex flex-col justify-start items-center  p-5 mx-5 shadow-md shadow-shadow rounded-lg '>
            {/* the header part */}
            <div className=" w-full flex flex-row justify-between items-center ">
                <div className="flex flex-row justify-center items-center">
                     <div className="bg-black w-2 h-10 ml-2 "></div>
                     <h1 className="font-semibold text-4xl">فاکتور خرید</h1>
                </div>
            </div>
            {/* the input sections */}
                <div className=" w-full flex flex-row justify-around items-start mt-16">
                     {/* the sub title */}
                    <div className=""><h1 className="font-semibold text-3xl">مشخصات فاکتور</h1></div>
                    <div className="flex flex-row flex-wrap w-3/4">
                        <input
                        type="text"
                        className="w-350 h-16 rounded-lg px-5 border border-shadow m-2 text-2xl outline-none focus:border-btn " 
                        placeholder="نام فروشنده"
                        value={sellerNmae}
                        onChange={(e)=>setSellerName(e.target.value)}
                        />
                        <div className=" flex flex-row justify-center items-center">
                            <input
                            type="text"  
                            className="w-324 h-16 rounded-lg py-1 px-5 border border-shadow m-2 text-2xl  outline-none focus:border-btn"
                            placeholder="شماره فاکتور"
                            value={FactorInvoice}
                            />
                            <button onClick={()=>GenerateFactorInvoice()} className=" flex flex-row justify-center items-center w-16 h-16 rounded-lg  bg-charts text-white mx-2 px-5"><GiCycle className="w-10 h-10 text-btn"/></button>
                        </div>
                        <input 
                        type="text" 
                        className="w-350 h-16 rounded-lg py-1 px-5 border border-shadow m-2 text-2xl  outline-none focus:border-btn" 
                        placeholder="تاریخ"
                        />
                        
                            <select className="w-350 h-16 rounded-lg py-1 px-5 border border-shadow m-2 text-2xl  outline-none focus:border-btn">
                                <option value="افغانی">افغانی</option>
                                <option value="تومان">تومان</option>
                                <option value="دالر">دالر</option>
                                <option value="یورو">یورو</option>
                            </select>
                        {/* <input
                        type="text" 
                        className="w-350 h-16 rounded-lg py-1 px-5 border border-shadow m-2 text-2xl  outline-none focus:border-btn"
                        placeholder="واحد"
                        /> */}
                    </div>
                </div>
                {/* the item infp list  */}
                <div className=" w-full flex flex-row justify-around items-start mt-16">
                     {/* the sub title */}
                    <div className=""><h1 className="font-semibold text-3xl">مشخصات فاکتور</h1></div>
                    <div className="flex flex-col w-3/4">
                          <div className="flex flex-row flex-wrap items-center mb-2">
                            <div className=" flex flex-row justify-center items-center rounded-md  w-52 h-38 bg-lightBlue text-2xl font-normal mx-2 ">No</div>
                            <div className=""><input type="text" className="w-300 h-38 rounded-md py-3 px-4 mx-2 bg-lightBlue outline-none border border-lightBlue focus:border-btn text-2xl" value="نام جنس"   /></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-3 px-4 mx-2 bg-lightBlue outline-none border border-lightBlue focus:border-btn text-2xl" value="تعدا"      /></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-3 px-4 mx-2 bg-lightBlue outline-none border border-lightBlue focus:border-btn text-2xl" value="قیمت فی"  /></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-3 px-4 mx-2 bg-lightBlue outline-none border border-lightBlue focus:border-btn text-2xl" value="مجموعه کل" /></div>
                          </div>
                          <div className="flex flex-row flex-wrap items-center mb-2">
                            <div className=" flex flex-row justify-center items-center rounded-md  w-52 h-44 bg-lightBlue text-2xl font-normal mx-2">1</div>
                            <div className=""><input type="text" className="w-300 h-38 rounded-md py-4 px-5 mx-2 bg-gray_button text-2xl outline-none" value={productName} onChange={(e)=>setProductName(e.target.value)}/></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-4 px-4 mx-2 bg-gray_button text-2xl outline-none" value={numbe} onChange={(e)=>setNumber(e.target.value)}/></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-4 px-4 mx-2 bg-gray_button text-2xl outline-none"  value={pricePer} onChange={(e)=>setPricePer(e.target.value)}/></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-4 px-4 mx-2 bg-gray_button text-2xl outline-none" value={totalPrice} onChange={(e)=>setTotalPrice(e.target.value)}/></div>
                          </div>
                          <div className="flex flex-row flex-wrap items-center">
                            <div className=" flex flex-row justify-center items-center rounded-md  w-52 h-44 bg-lightBlue text-2xl font-normal mx-2">2</div>
                            <div className=""><input type="text" className="w-300 h-38 rounded-md py-4 px-4 mx-2 bg-gray_button text-2xl outline-none"/></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-4 px-4 mx-2 bg-gray_button text-2xl outline-none"/></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-4 px-4 mx-2 bg-gray_button text-2xl outline-none"/></div>
                            <div className=""><input type="text" className="w-235 h-38 rounded-md py-4 px-4 mx-2 bg-gray_button text-2xl outline-none"/></div>
                          </div>
                    </div>
                </div>
                {/* the totla amount */}
                <div className="w-full text-left ml-64 mt-5 text-2xl font-semibold"><h1>مجموعه کل : <span className="text-btn">25,000</span> افغانی</h1></div>
                {/* the taz and final calculat */}
                <div className=" w-full flex flex-row justify-end items-start mt-16 ml-40">
                     {/* the sub title */}
                    <div className="flex flex-row flex-wrap justify-center items-center w-3/4 pr-5 mr-20">
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="mr-2 text-xl  text-textGray">مبلغ تخفیف : </h1>
                            <input value={discount} onChange={(e)=>setDiscount(e.target.value)} type="text" className="w-350 h-16 rounded-lg  px-5 border border-shadow m-2 text-2xl outline-none focus:border-btn mx-1"/>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="mr-2 text-xl  text-textGray">مالیات : </h1>
                            <input value={taxs} onChange={(e)=>setTaxs(e.target.value)} type="text" className="w-350 h-16 rounded-lg  px-5 border border-shadow m-2 text-2xl outline-none focus:border-btn mx-1" />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="mr-2 text-xl  text-textGray">قابل پرداخت : </h1>
                            <input type="text" className="w-350 h-16 rounded-lg  px-5 border border-shadow m-2 text-2xl outline-none focus:border-btn mx-1 "/>
                        </div>
                    </div>
                </div>
                {/* the subment buttons */}
                <div className="w-full flex flex-row justify-end items-center ml-48 pl-2 mt-12 px-5">
                    <button className="bg-gray_button text-textGray text-2xl  rounded-md py-3 px-5 mx-2">لغو</button>
                    <button className="border border-gray_line text-black text-2xl  rounded-md py-3 px-5 mx-2">پرداخت و ثبت کردن</button>
                    <button onClick={()=>handelSaveMethod()} className="bg-btn text-white text-2xl  rounded-md py-3 px-5 mx-2">ثبت کردن</button>
                </div>
                {/* the art of saving the new item */}
                {
                    showSaveF 
                    &&
                    <SaveNewFac/>
                }
        </div>
    )
}
export default BuyFactor