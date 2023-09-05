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
                

                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzgwODI3MCwianRpIjoiMjBiNzdkYTMtNWVkYS00ZWFlLWE1NDAtYjkwMWQ2MmE3YmM5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzgwODI3MCwiZXhwIjoxNjkzODk0NjcwfQ.7okn7at39RzXodfGXZp45W5iH9fFaTdZjBByMA5H7Nk"
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
                     <div className="bg-black w-2 h-10 ml-2 rounded-md "></div>
                     <h1 className="font-semibold text-2xl">فاکتور خرید</h1>
                </div>
            </div>
            {/* the input sections */}
                <div className=" w-full flex flex-row justify-around items-start mt-16">
                     {/* the sub title */}
                    <div className=""><h1 className="font-semibold text-lg mb-2">مشخصات فاکتور</h1></div>
                    <div className="flex flex-row flex-wrap w-3/4">
                        <input
                        type="text"
                        className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg " 
                        placeholder="نام فروشنده"
                        value={sellerNmae}
                        onChange={(e)=>setSellerName(e.target.value)}
                        />
                        <div className=" flex flex-row justify-center items-center">
                            <input
                            type="text"  
                            className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg "
                            placeholder="شماره فاکتور"
                            value={FactorInvoice}
                            />
                            <button onClick={()=>GenerateFactorInvoice()} className="flex flex-row justify-center items-center w-10 h-10 rounded-lg bg-charts text-black mx-2 px-5"><GiCycle className="w-7 h-7 text-btn"/></button>
                        </div>
                        <input 
                        type="text" 
                        className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg " 
                        placeholder="تاریخ"
                        />
                        
                            <select className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg mt-2">
                                <option value="افغانی">افغانی</option>
                                <option value="تومان">تومان</option>
                                <option value="دالر">دالر</option>
                                <option value="یورو">یورو</option>
                            </select>
                    </div>
                </div>
                {/* the item infp list  */}
                <div className=" w-full flex flex-row justify-around items-start mt-16">
                     {/* the sub title */}
                    <div className=""><h1 className="font-semibold text-lg">مشخصات فاکتور</h1></div>
                    <div className="flex flex-col ml-16 ">
                          <div className="flex flex-row  items-center mb-2">
                            <div className="flex flex-row justify-center items-center rounded-md w-10 h-10 bg-lightBlue  font-normal mx-2 ">No</div>
                            <div className="w-72 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-lightBlue  ">نام جنس فروخته شده</div>
                            <div className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-lightBlue ">تعداد</div>
                            <div className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-lightBlue ">قیمت فی</div>
                            <div className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-lightBlue ">قیمت فی</div>
                          </div>
                          <div className="flex flex-row  items-center mb-2">
                            <div className="flex flex-row justify-center items-center rounded-md   bg-lightBlue  font-normal mx-2 "><p className="w-10 h-10 flex flex-row justify-center items-center">2</p></div>
                            <input type="text" className="w-72 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                            <input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine" value={numbe} onChange={(e)=>setNumber(e.target.value)}/>
                            <input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine"  value={pricePer} onChange={(e)=>setPricePer(e.target.value)}/>
                            <input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine" value={totalPrice} onChange={(e)=>setTotalPrice(e.target.value)}/>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="flex flex-row justify-center items-center rounded-md bg-lightBlue  font-normal mx-2"><p className="w-10 h-10 flex flex-row justify-center items-center">1</p></div>
                                <input type="text" className="w-72 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg  outline-none bg-grayLine "/>
                            <div className=""><input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine"/></div>
                            <div className=""><input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine"/></div>
                            <div className=""><input type="text" className="w-60 h-12  py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg outline-none bg-grayLine"/></div>
                          </div>
                    </div>
                </div>
                {/* the totla amount */}
                <div className="w-full text-left ml-64 mt-5 text-lg font-semibold"><h1>مجموعه کل : <span className="text-btn">25,000</span> افغانی</h1></div>
                {/* the taz and final calculat */}
                <div className=" w-full flex flex-row fled justify-end items-start mt-16 ml-40">
                     {/* the sub title */}
                    <div className="flex flex-row flex-wrap justify-center items-center w-3/4 pr-5 mr-20">
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="mr-2  text-lg mb-2  text-textGray">مبلغ تخفیف : </h1>
                            <input value={discount} onChange={(e)=>setDiscount(e.target.value)} type="text" className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg "/>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="mr-2 text-lg mb-2  text-textGray">مالیات : </h1>
                            <input value={taxs} onChange={(e)=>setTaxs(e.target.value)} type="text" className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg " />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="mr-2  text-lg mb-2  text-textGray">قابل پرداخت : </h1>
                            <input type="text" className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg  "/>
                        </div>
                    </div>
                </div>
                {/* the subment buttons */}
                <div className="w-full flex flex-row justify-end items-center ml-72 pl-2 mt-12 px-5 m ">
                    <button className="bg-gray_button text-gray_fac text-lg py-2 px-4 mb-2 font-medium rounded-md ">لغو</button>
                    <button className=" border border-gray_line text-gray_fac text-lg py-2 px-6 mb-2 font-medium rounded-md  mr-5">پرداخت و ثبت کردن</button>
                    <button onClick={()=>handelSaveMethod()} className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5">ثبت کردن</button>
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