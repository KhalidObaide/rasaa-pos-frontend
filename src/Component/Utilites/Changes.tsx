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



    // async function getData() {
    //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzU2NDQxNywianRpIjoiMjI2OTgwZTEtNTJiOS00MGY0LTliMjUtOGMwNzdhOTQ5ZmFjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzU2NDQxNywiZXhwIjoxNjkzNjUwODE3fQ.Vna2j6GVwMgo-Mf4bi0rwMVhQOGPL5qftCoJzqTT9Ks"
    //     try {
    //       const response = await axios.get('http://127.0.0.1:9005/utilities',{headers: { Authorization: `Bearer ${token}` },});
    //       if (response.data) {
    //         setData(response.data.result)
    //         console.log(response.data.result);
    //       }else{
    //     alert('no')
    //       }
    //     } catch (error) {
    //       console.error('Error itmes:', error)
    //     }
    // }
    // getData()

    const handelDelet = ()=>{
        console.log("this is the cliced item",clickedItem.id);
        async function getData() {
            const token = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzY1MTU1MywianRpIjoiOTVjY2ZkYTMtZTRiMS00OTc5LWJlMGEtODQ2OGYyYjRmZDY4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzY1MTU1MywiZXhwIjoxNjkzNzM3OTUzfQ.Be7V5xlviiP3JkLmgvwSxL5K7qPhiSZwfE9pHoUaBz4"
            try {
              const response = await axios.delete(`http://127.0.0.1:9005/utilities?id=${clickedItem.id}`,{headers: { Authorization: `Bearer ${token}` },});
              if (response.data) {
                console.log('the fucking',response.data);
                setReReand(true)
              }else{
            alert('no')
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
        <div className=" w-637 p-5 bg-white absolute z-index-4 top-1/4 right-31%   flex flex-col justify-start items-center rounded-md">
             {/* title */}
            <div className="flex flex-row-reverse justify-between item-center w-full mb-16 ">
                <div className='flex flex-row justify-center items-center '>
                    <div className="flex flex-row justify-center items-center">
                    {
                        display2
                        &&
                        <>
                            <button onClick={()=>{setDisplay2(false);setDisplay(true)}} className='text-5xl mr-5 mt-1 border border-editGreen p-0'><BiEdit  className='w-10 h-10 text-editGreen '/></button>
                            <button onClick={ ()=>handelDelet()} className="text-5xl mr-5 mt-1 border border-delet p-0"><AiOutlineDelete className=' w-10 h-10 text-delet'/></button>
                        </>
                    }
                  {
                       display
                        &&
                        <div className='flex flex-row justify-center items-center '>
                            <button onClick={()=>setShowEdit(false)} className=" text-5xl  mt-1 border border-delet p-0"><IoIosClose className='text-delet m-0  '/></button>
                            <button  className="text-5xl mr-5 mt-1 border border-editGreen p-0"><BsCheck className='text-editGreen'/></button>                    
                        </div>
                  }
                    </div>
                    <button onClick={()=>setShowEdit(false)} className="mb-1 text-5xl mr-5 ml-7">&times;</button>
                </div>
                <div className=" flex flex-row justify-center items-center mr-8 ">
                <div className="w-1.5 mt-2 h-10 rounded-md bg-black ml-2 "></div>
                   <h1 className="mb-1 font-Estedad font-bold text-black  text-btnS " >مورد جدید</h1>
                   <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
                </div>
            </div>
       
         {/* the account part */}
         <div className=" w-full flex flex-col justify-center items-center ">
                <div className="flex flex-row-reverse justify-around items-start mb-2">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className='mr-2 mb-2 font-semibold text-xl '>مقدار</h1>
                    <input
                      type="text"    
                  
                      placeholder={clickedItem[3]}
                      className="w-282 h-16 py-4 px-2  pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl "/>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='mr-2 mb-2 font-semibold text-xl '>کلید</h1>
                      <input 
                         placeholder={clickedItem[2]}
                         className='w-282 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl '/>
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-around items-start">
                   <div className="flex flex-col justicenter items-start">
                        <h1 className='mr-2 mb-2 font-semibold text-xl '>ملاحضات</h1>
                        <textarea

                            className="w-282 h-40 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl resize-none">
                        </textarea>
                   </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='mr-2 mb-2 font-semibold text-xl '>عنوان</h1>
                        <input
                        placeholder={clickedItem[1]}
                        type="text"
                        className="w-282 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl "/>
                    </div>
                 </div>
            </div>
        </div>    
    </div>
    )
}
export default ItemChanges