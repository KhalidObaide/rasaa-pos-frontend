import React, { Component, useEffect, useState } from 'react'
import {CiWarning} from 'react-icons/ci'
import {TbLoader} from 'react-icons/tb'
import axios from 'axios'
const SaveNewProduct = ({setDisplayState,setReReand,setLoader,clickedData,jwt }:any)=>{
    const [alltodo,setAllTodo] =useState([]) 
    const [key,setKey] = useState('')
    const [mount,setMount] = useState('')
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');  
    const [capital,setCapital] = useState(false)
    const [style,setStyle] = useState(false)
    const [activeInput,setActiveInput] = useState(true)


    const EmployeeData = {
        title: title,
        key: key,
        value: mount
      };

      const HandlPost = async () => {
        setStyle(true);
        try {
          const token = jwt
          const res = await axios({
            method: 'post',
            url: 'https://lajward-mis.dev:8005/utilities',
            headers: { Authorization: `Bearer ${token}` },
            data: EmployeeData
          });
      
          if (res.status === 200) {
            setStyle(false);
            setReReand(true);
            setDisplayState(false);
          } else {
            alert('The request was not successful.');
          }
        } catch (error) {
            setStyle(false)
            alert('مشکلی در پوست اطلاعات وجود دراد ')

        }
        setReReand(false);
      };

    const handelsaveNewItem = ()=>{
        setReReand(false)
        HandlPost()
        }

    const handleInputChange = (event:any) => {
        let newValue = event.target.value;
        setKey(newValue)
        // Check if the new value contains any capital litters
        if (/[A-Z]/.test(newValue)) {
          setError(`از حروف کوچگ انگلیسی استفاده کنید `);
          setCapital(false)
          // SELECT THE INPUT 
          setActiveInput(false)
        } else {
          setError('');
          setInputValue(newValue);
          setCapital(true)
          setActiveInput(true)

        }
    };
    return(
       <>
        <div  onClick={()=>setDisplayState(false)} className=' w-full h-full fixed top-0 left-0  bg-shadow'>
                    </div>
            <div className=" p-5 bg-white  z-index-10  fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md">
                 {/* title */}
                <div className="w-full flex flex-row-reverse justify-between item-center mb-4 ">
                    <button onClick={()=>setDisplayState(false)} className="mb-1 text-3xl ml-2 text-gray_fac">&times;</button>
                    <div className=" flex flex-row justify-center items-center mr-2">
                    <div className="w-1  h-6 rounded-md bg-black ml-2 "></div>
                       <h1 className="mb-1 font-Estedad text-black text-xl " >مورد جدید</h1>
                    </div>
                </div>
           
             {/* the account part */}
             <div className=" w-full flex flex-col justify-center items-center ">
                          {/* <TiWarningOutline/> */}
                    <div className="flex flex-row  justify-around items-start mb-2">
                        <div className='flex flex-row' >
                          <div>
                          <input
                             value={key}
                             onChange={handleInputChange} 
                             placeholder='کلید'
                             className={`w-80 h-12  py-2 px-2 pr-5 text-right rounded-md outline-none mx-2 text-lg ${activeInput ? 'border-solid border border-borderColor' : '  border-solid border-2 border-error'}`}/>
                             {error && <div  style={{ color: 'red' }} className=" flex flex-row-reverse justify-end items-center text-right mb-2 mt-2 text-xs" >{`${error}`} <CiWarning className='w-4 h-4 '/></div>}
                          </div>
                        <input
                         value={mount}
                         onChange={(e)=>setMount(e.target.value)}
                         type="text"   
                         placeholder="مقدار" 
                         className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg"/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around items-start">
                        <input
                         type="text"
                         value={title}
                         onChange={(e)=>setTitle(e.target.value)}
                         placeholder="عنوان"
                         className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg "/>
                        <textarea
                         className="w-80 h-20  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg resize-none"
                          placeholder='ملاحضات'
                          value={desc}
                          onChange={(e)=>setDesc(e.target.value)}
                          >
                          </textarea>
                     </div>
                </div>
                 {/* main subment buttons */}
                <div className="w-full px-2 flex flex-row-reverse justify-start items-start mt-10">
                         {
                            style ? <button className='bg-btn mr-5 py-3 px-7 rounded-md'><TbLoader className='animate-spin w-5 h-5 text-white  '/></button>
                            :  <button onClick={()=>handelsaveNewItem()}  className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5"> ثبت کردن</button> 
                        }
                    <button onClick={()=>setDisplayState(false)} className="bg-btnGray text-gray_fac text-lg py-2 px-4 mb-2 font-medium rounded-md ">لغو</button>
                </div>
            </div>    
</>
    )
}
export default SaveNewProduct
