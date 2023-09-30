import React, { Component, useState, useEffect } from 'react'
import {TbLoader} from 'react-icons/tb'
import {BsChevronRight} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'
import axios from 'axios'
import Item_changes from './Changes'
import SaveNewProduct from './Save_new_product'
import Style from './Types.module.css'

const Types = ()=>{
   const [one,setOne] = useState(1)
   const [tow,seTow] = useState(2)
   const [three,setThree] = useState(3)
   const [foure,setFour] = useState(5)
   const [douth,setDouth] = useState('...')
   const [dispaly , setDisplay]=useState(false)
  //  this the new change
   const [display2,setdisplay2] = useState(false)
   const [clickedData,setClickedData]= useState()
   const [reReand,setReReand] = useState(false)
   const [style,setStyle] = useState(true)
   const [style2,setStyle2] = useState(true)
  //  pagination
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [items, setItems] = useState([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // the style states
  const [alartNetwork ,setAlartNetWork] = useState(true)
   
   const listClicked = (data:any)=>{
     setClickedData(data)
    setdisplay2(true)
   }
   const handelAddnewFac = ()=>{
    setDisplay(true)
  }

  // ALART FUNCTION
  const alart = ()=>{
  setAlartNetWork(false)
  }

  
  
  const [data, setData]= useState([])
  console.log(clickedData);
   async function getData() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NjA1MjU4MSwianRpIjoiNjNiYWViN2UtOWM0NS00MGM0LWIxMTktZjcwNDViM2NiZjU2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5NjA1MjU4MSwiZXhwIjoxNjk2MTM4OTgxfQ.vKmPzadWSKfx-T-E480cF7X6dyl84NRZl00Lg0054y8"
    try {
      const response = await axios.get('https://lajward-mis.dev:8005/utilities',{headers: { Authorization: `Bearer ${token}` },});
      if (response.status = 200) {
        setStyle(false)
        setData(response.data);
        console.log('start');
        setItems(response.data)
        
      }else{
        alert('no')
      }
    } catch (error) {
      // setStyle(false)
console.log("test")  
    // THE ALAERT  FUNCTION
      alart()




    }
}
if (reReand) {
  getData()
}else{
  
}



useEffect(()=>{
  getData()
},[]);

// start calculatuiong the pagnation
      
  let totalPages = Math.ceil(items.length / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentItems = items.slice(startIndex, endIndex);

  const pageNumbers = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage === 1) {
      pageNumbers.push(1, 2, 3);
    } else if (currentPage === totalPages) {
      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
    }
  }



    return(
        <div className='font-Estedad flex flex-col justify-center items-center shadow-md shadow-[rgb(235, 235, 235)] rounded-md mx-5 p-4 '>
         
               {/* header */}
               <div className=" w-full flex flex-row-reverse justify-between items-center mb-5">
                 <button onClick={()=>handelAddnewFac()} className=' bg-btn text-white text-lg py-2 px-5 font-medium rounded-md '>ثبت مورد جدید</button>
                 <div className="flex flex-row justify-center items-center mr-2">
                     <div className="w-1  h-6 rounded-md bg-black ml-2  "></div>
                     <div><h1 className='mb-1 font-Estedad font-bold text-black text-base'>مورد ها</h1></div>
                 </div>
            </div>
             {/* the save alart Component */}
                {
                    dispaly &&
                    <SaveNewProduct setReReand={setReReand}  setDisplayState={setDisplay} clickedData={clickedData}/>
                }
             {/* the utilites list */}
             <div className="w-full">
            <table className='w-full' >
                <thead>
                   <tr className=' bg-chart '>
                    <td className='w-14  text-lg text-center py-3'>No</td>
                    <td className='w-324 text-lg text-center '>عنوان</td>
                    <td className='w-324 text-lg text-center '>کلید</td>
                    <td className='w-324 text-lg text-center '>مقدار</td>
                    {/* <td className='w-324 text-2xl text-center font-semibold'>ملاحضات</td> */}
                   </tr>
                </thead>
                <tbody>
                    {currentItems == null ? "" :
                    currentItems.map((data:any, index:any)=>(
                        <tr onClick={()=>listClicked(data)}  className={`cursor-pointer ${index %2 !=0 ? "bg-grayLine" : 'bg-white ' }`} >
                             <td className="w-14  text-center text-lg py-3">{index+1} </td>
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
                  {/* The loader  */}
                 {
                  style
                   &&
                  <div className=' w-full h-full fixed  '><TbLoader className=' animate-spin w-10 h-10 text-btn duration-1000 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-10 ئ'/></div>
                 } 
                 {/* the delet alart */}
                 <div className="p-4 text-center justify-self-end">
          <ul className="flex justify-center space-x-1">
            <li>
              <button
                className="w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500 ml-1"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <BsChevronRight />
              </button>
            </li>
            {pageNumbers.map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={`w-12 h-10 flex items-center justify-center border rounded  ${
                    pageNumber === currentPage
                      ? "bg-btn text-white"
                      : "text-graybutton hover:text-btn"
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            <li>
              <button
                className="w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <BsChevronLeft />
              </button>
            </li>
          </ul>
        </div>
        </div>
    )
}
export default Types

  // if (reReand) {
  //   getData();
  // } else {
  //   console.log("ops");
  // }
  