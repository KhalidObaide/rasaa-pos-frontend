import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
const SaveNewProduct = ({setDisplayState,setReReand,setLoader }:any)=>{
    const [alltodo,setAllTodo] =useState([]) 
    const [key,setKey] = useState('')
    const [mount,setMount] = useState('')
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');  
    const [capital,setCapital] = useState(false)

    // start posting the data
    const getJWT = () => {
        return localStorage.getItem("jwt")
       
        }
        getJWT()

    const EmployeeData = {
        title: title,
        key: key,
        value: mount
      };

      const HandlPost = async () => {
        alert('KASJLjas')
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5Mzg5Nzk3MywianRpIjoiNDdhYWRhNjYtMjY1YS00ODllLThhYjItNjdlMDRmZDE5NzZhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5Mzg5Nzk3MywiZXhwIjoxNjkzOTg0MzczfQ.DL2u-T1alOT16J1M3GFPIBwQxOE-b1vSnjcN47aQcLs"
        const res = await axios({
            method:'post',
            url : 'https://lajward-mis.dev:8005/utilities',
            headers: { Authorization: `Bearer ${token}` },
            data : EmployeeData
        })
        if(res.status === 200){
           alert('done')
        //    setReReand(true)
        }else{
            alert('There was an Error')
            console.log(res)
        }
        
    };
    const handelsaveNewItem = ()=>{
        HandlPost()
        // setReReand(false)
            setDisplayState(false)
        }

    const handleInputChange = (event:any) => {
        let newValue = event.target.value;
        setKey(newValue)
        // Check if the new value contains any capital litters
        if (/[A-Z]/.test(newValue)) {
          setError('از حروف کوچگ انگلیسی استفاده کنید');
          setCapital(false)
        } else {
          setError('');
          setInputValue(newValue);
          setCapital(true)
        }
    };
    return(
        <div className=' w-full h-full absolute top-0 left-0 z-index-10  bg-shadow'>
            <div className=" p-5 bg-white absolute z-index-4  top-40 right-30%  flex flex-col justify-center items-center rounded-md">
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
                    <div className="flex flex-row-reverse  justify-around items-start mb-2">
                         <input
                          value={mount}
                          onChange={(e)=>setMount(e.target.value)}
                          type="text"   
                          placeholder="مقدار" 
                          className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-textGray rounded-md outline-none mx-2 text-lg"/>
                        <div>
                          <input
                             value={key}
                             
                             onChange={handleInputChange} 
                             placeholder='کلید'
                             className='w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-textGray rounded-md outline-none mx-2 text-lg '/>
                             {error && <p style={{ color: 'red' }} className=" text-right pr-4 mt-2" >{error}</p>}
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-around items-start">
                        <textarea
                         className="w-80 h-20  py-2 px-2 pr-5 text-right border-solid border border-textGray rounded-md outline-none mx-2 text-lg resize-none"
                          placeholder='ملاحضات'
                          value={desc}
                          onChange={(e)=>setDesc(e.target.value)}
                          >
                            
                          </textarea>
                        <input
                         type="text"
                         value={title}
                         onChange={(e)=>setTitle(e.target.value)}
                         placeholder="عنوان"
                         className="w-80 h-12  py-2 px-2 pr-5 text-right border-solid border border-textGray rounded-md outline-none mx-2 text-lg "/>
                     </div>
                </div>
                 {/* main subment buttons */}
                <div className="w-full px-2 flex flex-row-reverse justify-start items-start mt-10">
                     <button onClick={()=>handelsaveNewItem()}  className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5">  ثبت کردن</button> 
                    <button onClick={()=>setDisplayState(false)} className="bg-btnGray text-gray_fac text-lg py-2 px-4 mb-2 font-medium rounded-md ">لغو</button>
                </div>
            </div>    
        </div>
    )
}
export default SaveNewProduct
