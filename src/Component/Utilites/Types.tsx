import React, { Component, useState, useEffect } from 'react'
import {TbLoader} from 'react-icons/tb'
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


//    the style state
const [style,setStyle] = useState(0)


   const listClicked = (data:any)=>{
    // console.log("this the secon Dta",data);
    setClickedData(data)
    setdisplay2(true)
   }
   const handelAddnewFac = ()=>{
    setDisplay(true)

   }
   
 
   const [data, setData]= useState([])
   async function getData() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzY1MTU1MywianRpIjoiOTVjY2ZkYTMtZTRiMS00OTc5LWJlMGEtODQ2OGYyYjRmZDY4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzY1MTU1MywiZXhwIjoxNjkzNzM3OTUzfQ.Be7V5xlviiP3JkLmgvwSxL5K7qPhiSZwfE9pHoUaBz4"
    try {
      const response = await axios.get('https://lajward-mis.dev:8005/utilities',{headers: { Authorization: `Bearer ${token}` }});
      if (response.data) {
        setData(response.data)
        console.log('nano',response.data);
      }else{
    alert('no')
      }
    } catch (error) {
      console.error('Error itmes:', error)
    }
}
    // start getting the data form local api
    useState(()=>{
        getData()
      },[]) 
      
      if (reReand) {
        getData()
      }else{
        console.log('ops');
      }
    return(
        <div className=' font-Estedad flex flex-col justify-center items-center shadow-md shadow-[rgb(235, 235, 235) rounded-md  mx-5 p-4 '>
               {/* header */}
               <div className=" w-full flex flex-row-reverse justify-between items-center mb-5">
                 <button onClick={()=>handelAddnewFac()} className=' bg-btn text-white text-2xl py-3 px-5  pb-5 font-medium rounded-md '>ثبت مورد جدید</button>
                 {/* <button onClick={()=>HandlPost()} className=' bg-btn text-white text-2xl py-3 px-5  pb-5 font-medium rounded-md '>ثبت مورد جدید</button> */}
                 <div className="flex flex-row justify-center items-center mr-2">
                     <div className="w-1.5 mt-2 h-10 rounded-md bg-black ml-2 "></div>
                     <div><h1 className='mb-1 font-Estedad font-bold text-black  text-btnS'>مورد ها</h1></div>
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
                    <td className='w-60   text-2xl text-center py-5 font-semibold '>No</td>
                    <td className='w-324 text-2xl text-center font-semibold'>عنوان</td>
                    <td className='w-324 text-2xl text-center font-semibold'>کلید</td>
                    <td className='w-324 text-2xl text-center font-semibold'>مقدار</td>
                    {/* <td className='w-324 text-2xl text-center font-semibold'>ملاحضات</td> */}
                   </tr>
                </thead>
                <tbody>
                    {data == null ? "" :
                    data.map((data:any, index:any)=>(
                        <tr onClick={()=>listClicked(data)}  className={`  cursor-pointer ${index %2 !=0 ? "bg-grayLine" : 'bg-white ' }`} >
                             <td className="w-60  text-center text-2xl py-5">{index+1}</td>
                             <td className='w-324 text-center text-2xl'>{data.key}</td>
                             <td className='w-324 text-center text-2xl'>{data.title}</td>
                             <td className='w-324 text-center text-2xl'>{data.value}</td> 
                             {/* <td className='w-324 text-center text-2xl'>{data[0]}</td> */}
                        </tr>
                        ))}
                </tbody>
            </table>
                      {/* the loader section */}
                      {
                        // loader 
                        // &&
                        // <div className='flex flex-row justify-center items-center mt-5 mr-5'><TbLoader className=' text-btn w-10 h-10 animate-spin  '/></div>
                      }
                     {
                        display2 && 
                        // Settest = {Settest} mapedData={mapedData}  dispaly={display_2} setDisplayState={setdisplay_2}
                         <Item_changes setReReand={setReReand} clickedItem = {clickedData}  setShowEdit={setdisplay2}/>
                     }
                    {/* the footer part of this page */}
                         <div className="w-full flex flex-row-reverse justify-center items-center py-5 mt-5">
                            <button className="flex flex-row justify-center items-center border-solid border border-gray_fac gray w-16 h-11 rounded-md mx-1 text-2xl p-2"><BiChevronLeft/></button>
                            <button className="flex flex-row justify-center items-center border-solid border border-gray_fac text-black w-16 h-11 rounded-md mx-1 text-2xl p-2 pb-5 ">{douth}</button>
                            <button className={`flex flex-row justify-center items-center border-solid border border-gray_fac text-black w-16 h-11 rounded-md mx-1 text-2xl p-2 ${style == 3 ? 'bg-B_blue  text-white' : 'bg-white'} `}>{three}</button>
                            <button className={`flex flex-row justify-center items-center border-solid border border-gray_fac text-black w-16 h-11 rounded-md mx-1 text-2xl p-2 ${style == 2 ? 'bg-B_blue  text-white' : 'bg-white'} `}>{tow}</button>
                            <button className={`flex flex-row justify-center items-center border-solid border border-gray_fac text-black w-16 h-11 rounded-md mx-1 text-2xl p-2 bg-blue ${style == 1 ? 'bg-B_blue  text-white' : 'bg-white'} `}>{one}</button>
                            <button className="flex flex-row justify-center items-center border-solid border border-gray_fac text-black w-16 h-11 rounded-md mx-1 text-2xl p-2"><BiChevronRight/></button>
                         </div>
                 </div>       
        </div>
    )
}
export default Types

