import React, { Component, useEffect, useState } from 'react'
import {AiFillEdit,AiFillDelete,} from 'react-icons/ai'
import {TbLoader} from 'react-icons/tb'
import {BsCheck,} from 'react-icons/bs'
import {IoIosClose} from 'react-icons/io'
import {BiEdit} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import axios from 'axios'
import dataBase from '../../data/data'
const ItemChanges = ({
    // showEdit,
    setShowEdit,
    clickedItem,
    setReReand
}:any)=>{
    
    const [key,setKey] = useState('')
    const [title,setTitle] = useState('')
    const [mount,setMount] = useState('')
    const [accepted,setAccepted] = useState('')
    const [error, setError] = useState('');
    const [display,setDisplay] = useState(false)
    const [display2,setDisplay2] = useState(true) 

    const handelDelet = ()=>{
        console.log("this is the cliced item",clickedItem.id);
        async function getData() {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzgwODI3MCwianRpIjoiMjBiNzdkYTMtNWVkYS00ZWFlLWE1NDAtYjkwMWQ2MmE3YmM5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzgwODI3MCwiZXhwIjoxNjkzODk0NjcwfQ.7okn7at39RzXodfGXZp45W5iH9fFaTdZjBByMA5H7Nk"
            try {
              const response = await axios.delete(`https://lajward-mis.dev:8005/utilities?id=${clickedItem.id}`,{headers: { Authorization: `Bearer ${token}` },});
              if (response.data = 200) {
                console.log('the fucking',response.data);
                setReReand(true)
              }else{
                console.log(error);
                
              }
            } catch (error) {
              console.error('Error itmes:', error)
            }
        }
        getData()
        setReReand(false)
        setShowEdit(false)
    }


    return(
        <div className=' w-full h-full absolute top-0 left-0 z-index-10  bg-shadow'>
        <div className="p-5 bg-white absolute z-index-4  top-40 right-31%  flex flex-col justify-center items-center rounded-md">
             {/* title */}
            <div className="flex flex-row-reverse justify-between item-center w-full mb-5 ">
                <div className='flex flex-row justify-center items-center '>
                    <div className="flex flex-row justify-center items-center">
                    {
                        display2
                        &&
                        <>
                            <button onClick={()=>{setDisplay2(false);setDisplay(true)}} className='text-2xl mr-5 mt-1 border border-editGreen p-0'><BiEdit  className='w-7 h-7 text-editGreen text-base '/></button>
                            <button onClick={ ()=>handelDelet()} className="text-2xl mr-2 mt-1 border border-delet p-0"><AiOutlineDelete className=' w-7 h-7 text-delet'/></button>
                        </>
                    }
                  {
                       display
                        &&
                        <div className='flex flex-row justify-center items-center '>
                            <button onClick={()=>setShowEdit(false)} className=" text-2xl  mt-1 border border-delet p-0"><IoIosClose className='text-delet m-0 '/></button>
                            <button  className="text-2xl mr-5 mt-1 border border-editGreen p-0"><BsCheck className='text-editGreen'/></button>                    
                        </div>
                  }
                    </div>
                    <button onClick={()=>setShowEdit(false)} className="mb-1 text-3xl ml-2 text-gray_fac mr-3">&times;</button>
                </div>
                <div className=" flex flex-row justify-center items-center mr-2 ">
                <div className="w-1  h-6 rounded-md bg-black ml-2"></div>
                   <h1 className="mb-1 font-Estedad text-black text-xl " >مورد جدید</h1>
                   <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
                </div>
            </div>
       
         {/* the account part */}
         <div className=" w-full flex flex-col justify-center items-center ">
                <div className="flex flex-row-reverse justify-around items-start mb-2">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className='mr-2 mb-2 font-semibold text-base '>مقدار</h1>
                    <input
                      type="text"    
                  
                      placeholder={clickedItem[3]}
                      className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg "/>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='mr-2 mb-2 font-semibold text-base '>کلید</h1>
                      <input 
                         placeholder={clickedItem[2]}
                         className='w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg '/>
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-around items-start">
                   <div className="flex flex-col justicenter items-start">
                        <h1 className='mr-2 mb-2 font-semibold text-base '>ملاحضات</h1>
                        <textarea

                            className="w-80 h-20  py-2 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-lg  resize-none">
                        </textarea>
                   </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='mr-2 mb-2 font-semibold text-base  '>عنوان</h1>
                        <input
                        placeholder={clickedItem[1]}
                        type="text"
                        className="w-80 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl "/>
                    </div>
                 </div>
            </div>
        </div>    
    </div>
    )
}
export default ItemChanges