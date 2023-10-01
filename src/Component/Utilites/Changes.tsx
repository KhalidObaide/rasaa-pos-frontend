import React, { Component, useEffect, useState } from "react";
import {TbEditCircle} from "react-icons/tb"
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import {RiDeleteBinLine} from 'react-icons/ri'
import axios from "axios";
import RemoveAll from "./RemoveAlart";
const ItemChanges = ({ setShowEdit, clickedItem, setReReand,jwt}:any)=>{
  
    const [key,setKey] = useState(clickedItem.key)
    const [UbdateKey,setUbdateKey] = useState(clickedItem.key)
    const [title,setTitle] = useState(clickedItem.title)
    const [UbdateTitle,setUbdateTitle] = useState(clickedItem.title)
    const [mount,setMount] = useState(clickedItem.value)
    const [UbdateMount,setUbdateMount] = useState(clickedItem.value)
    const [error, setError] = useState('');
    const [display,setDisplay] = useState(false)
    const [display2,setDisplay2] = useState(true) 
    const [dispaly,setdisplay] = useState(false)
    const [dispalyDelet,setDispalyDelet] = useState(false)
    const [deletLoader,setDeletLoader] = useState(false)

  useEffect(()=>{
    console.log(UbdateKey);
    
  },[])


  const newData = {
    key : UbdateKey,
    title : UbdateTitle,
    value : UbdateMount
  }



    const handelDelet = ()=>{
      setDispalyDelet(true)
      } 
      const startDelet=() =>{
        console.log('the delet methos stared');        
        setDeletLoader(true)
        getData()
        setReReand(false)
      } 

      async function getData() {
          const token = jwt
          try {
            const response = await axios.delete(`https://lajward-mis.dev:8005/utilities?id=${clickedItem.id}`,{headers: { Authorization: `Bearer ${token}` },});
            if (response.data = 200) {
              console.log('the request sent');
              setReReand(true)
              setShowEdit(false)
              setdisplay(false)
              setDeletLoader(false)
            }else{  
              console.log('the request is not sent');
            }
          } catch (error) {
            console.error('Error itmes:', error)
          }
          setReReand(false)
        }
        
      // start Editing

        // try ro Edit
        const checkToEdit = ()=>{
          setDisplay2(false)
          setDisplay(true)
          if (!UbdateKey) {
            // setUbdateKey('clickedItem')
            //           console.log( 'this is the key',clickedItem.key);
            //           console.log(UbdateKey);
                      
                      
          }
        }
        // cansel the edit
        const CancellationEdit = ()=>{
          setDisplay2(true)
          setDisplay(false)
        }

      const hnadelEdit = ()=>{
        
        async function ubdateDate() {
          setReReand(false)
          const token = jwt
          try {
            const response = await axios.put(`https://lajward-mis.dev:8005/utilities?id=${clickedItem.id}`,newData,{headers: { Authorization: `Bearer ${token}` }});
            if (response.data = 200) {
            console.log('the request is send ');
            setShowEdit(false)
           setReReand(true)
           
          }else{
            console.log(error);     
          }
        } catch (error) {
            console.error('Error itmes:', error)
          }
          setReReand(false)
        }
        ubdateDate()
        
      }

      
      
      return(
        <>
        <div onClick={()=>setShowEdit(false)} className=' w-full h-full fixed top-0 left-0 z-index-5  bg-shadow'>
        </div>
        <div className=" p-5 bg-white z-index-10 rounded-md fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
             {/* title */}
            <div className="flex flex-row-reverse justify-between item-center w-full mb-5 ">
                <div className='flex flex-row justify-center items-center '>
                    <div className="flex flex-row justify-center items-center">
                    {
                        display2
                        &&
                        <>
                            <button onClick={()=>checkToEdit()} className='text-2xl mr-5 mt-1 rounded-md border border-editGreen p-0'><TbEditCircle  className='w-7 h-7 text-editGreen text-base '/></button>
                            <button onClick={ ()=>handelDelet()} className="text-2xl mr-2 mt-1 border border-delet rounded-md p-0"><RiDeleteBinLine className=' w-7 h-7 text-delet'/></button>
                        </>
                    }
                  {
                       display
                        &&
                        <div className='flex flex-row-reverse justify-center items-center '>
                            <button onClick={()=>CancellationEdit()} className=" text-2xl mr-2  mt-1 border border-delet p-0 rounded-md"><IoIosClose className='text-delet m-0 '/></button>
                            <button  onClick={()=>hnadelEdit()}  className="text-2xl mt-1 border border-editGreen p-0 rounded-md"><BsCheck className='text-editGreen'/></button>                    
                        </div>
                  }

                    </div>
                    <button onClick={()=>setShowEdit(false)} className="mb-1 text-3xl ml-2 text-gray_fac mr-3">&times;</button>
                </div>
                <div className=" flex flex-row justify-center items-center mr-2 ">
                <div className="w-1  h-6 rounded-md bg-black ml-2"></div>
                   <h1 className="mb-1 font-Estedad text-black text-xl " >مورد جدید</h1>
                </div>
            </div>
       
         {/* the account part */}
         <div className=" w-full flex flex-col justify-center items-center ">
                <div className="flex flex-row-reverse justify-around items-start mb-2">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className='mr-2 mb-2 font-medium text-base '>مقدار</h1>
                    <input
                      // type="text"    
                      // placeholder={clickedItem.value}
                      value={mount}
                      onChange={(e)=>{setMount(e.target.value),setUbdateMount(e.target.value)}}
                      className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-graybutton rounded-md outline-none mx-2 text-lg "/>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='mr-2 mb-2 font-medium text-base '>کلید</h1>
                      <input 
                      
                      // placeholder={key}
                      value={key}
                      onChange={(e)=>{setKey(e.target.value),setUbdateKey(e.target.value)}}

                         className='w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-graybutton rounded-md outline-none mx-2 text-lg '/>
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-around items-start">
                   <div className="flex flex-col justicenter items-start">
                        <h1 className='mr-2 mb-2 font-medium text-base '>ملاحضات</h1>
                        <textarea

                            className="w-80 h-20  py-2 px-2 pr-5 text-right border-solid border border-graybutton rounded-md outline-none mx-2 text-lg  resize-none" value={""}>
                        </textarea>
                   </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='mr-2 mb-2 font-medium text-base  '>عنوان</h1>
                        <input
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value),setUbdateTitle(e.target.value )}}
                        className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-graybutton rounded-md outline-none mx-2 text-lg "/>
                    </div>
                 </div>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-around items-start">
        
          </div>
         {
           dispalyDelet &&
           <RemoveAll startDelet={startDelet} deletLoader={deletLoader} setDispalyDelet= {setDispalyDelet} dispalyDelet = {dispalyDelet}/>
          }
        </>
      );
  }
export default ItemChanges;
