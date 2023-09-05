import React, { Component, useState, useEffect } from 'react'
import {TbLoader} from 'react-icons/tb'
import dataBase from '../../data/data'
import {BiChevronRight} from 'react-icons/bi'
import {BiChevronLeft} from 'react-icons/bi'
import Change_items from './Save_new_product'
import axios from 'axios'
import Item_changes from './Changes'
import SaveNewProduct from './Save_new_product'

const Types = ()=>{
   const [one,setOne] = useState(1)
   const [tow,seTow] = useState(2)
   const [three,setThree] = useState(3)
   const [foure,setFour] = useState(5)
   const [douth,setDouth] = useState('...')
   const [dispaly , setDisplay]=useState(false)
   const[display2,setdisplay2] = useState(false)
   const [clickedData,setClickedData]= useState()
   const [reReand,setReReand] = useState(false)
   const [style,setStyle] = useState(0)
   
   
   const listClicked = (data:any)=>{
     setClickedData(data)
    setdisplay2(true)
   }
   const handelAddnewFac = ()=>{
    setDisplay(true)
  }
  
  
  
  const [data, setData]= useState([])
   async function getData() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5Mzg5Nzk3MywianRpIjoiNDdhYWRhNjYtMjY1YS00ODllLThhYjItNjdlMDRmZDE5NzZhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5Mzg5Nzk3MywiZXhwIjoxNjkzOTg0MzczfQ.DL2u-T1alOT16J1M3GFPIBwQxOE-b1vSnjcN47aQcLs"
    try {
      const response = await axios.get('https://lajward-mis.dev:8005/utilities',{headers: { Authorization: `Bearer ${token}` },});
      if (response.status) {
        setData(response.data);
        console.log('start');
        
      }else{
        alert('no')
      }
    } catch (error) {
      console.error('Error itmes:', error)
    }
}
getData()

    useEffect(()=>{
        getData()
      },[]);
    return(
        <div className='font-Estedad flex flex-col justify-center items-center shadow-md shadow-[rgb(235, 235, 235)] rounded-md mx-5 p-4 '>
               {/* header */}
               <div className=" w-full flex flex-row-reverse justify-between items-center mb-5">
                 <button onClick={()=>handelAddnewFac()} className=' bg-btn text-white text-lg py-2 px-5  pb-4 font-medium rounded-md '>ثبت مورد جدید</button>
                 <div className="flex flex-row justify-center items-center mr-2">
                     <div className="w-1  h-6 rounded-md bg-black ml-2  "></div>
                     <div><h1 className='mb-1 font-Estedad font-bold text-black text-base'>مورد ها</h1></div>
                 </div>
            </div>
             {/* the save alart Component */}
                {
                    dispaly &&
                    <SaveNewProduct  setReReand={setReReand}  setDisplayState={setDisplay}/>
                }
             {/* the utilites list */}
             <div className="w-full">
            <table className='w-full' >
                <thead>
                   <tr className=' bg-charts '>
                    <td className='w-14  text-lg text-center py-3'>No</td>
                    <td className='w-324 text-lg text-center '>عنوان</td>
                    <td className='w-324 text-lg text-center '>کلید</td>
                    <td className='w-324 text-lg text-center '>مقدار</td>
                    {/* <td className='w-324 text-2xl text-center font-semibold'>ملاحضات</td> */}
                   </tr>
                </thead>
                <tbody>
                    {data == null ? "" :
                    data.map((data:any, index:any)=>(
                        <tr onClick={()=>listClicked(data)}  className={`cursor-pointer ${index %2 !=0 ? "bg-grayLine" : 'bg-white ' }`} >
                             <td className="w-14  text-center text-lg py-3">{index+1}</td>
                             <td className='w-324 text-center text-lg'>{data.key}</td>
                             <td className='w-324 text-center text-lg'>{data.title}</td>
                             <td className='w-324 text-center text-lg'>{data.value}</td> 
                        </tr>
                        ))}
                </tbody>
            </table>
                      {/* the loader section */}
                     {
                        display2 && 
                         <Item_changes setReReand={setReReand} clickedItem = {clickedData}  setShowEdit={setdisplay2}/>
                     }
                 </div>       
        </div>
    )
}
export default Types

