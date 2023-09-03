import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

// import dataBase from '../../data/data'
const SaveNewProduct = ({setDisplayState,setReReand,setLoader }:any)=>{
    const [alltodo,setAllTodo] =useState([]) 
    const [key,setKey] = useState('')
    const [mount,setMount] = useState('')
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');  
    // const [num,setNum] = useState(8)
    // const {dispaly2,setDisplay2} = useState(true)
    // const [capitalErro,setCapitalErro] = useState(false)
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

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzY1MTU1MywianRpIjoiOTVjY2ZkYTMtZTRiMS00OTc5LWJlMGEtODQ2OGYyYjRmZDY4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzY1MTU1MywiZXhwIjoxNjkzNzM3OTUzfQ.Be7V5xlviiP3JkLmgvwSxL5K7qPhiSZwfE9pHoUaBz4"
        const res = await axios({
            method:'post',
            url : 'https://lajward-mis.dev:8005/utilities',
            headers: { Authorization: `Bearer ${token}` },
            data : EmployeeData
        })
        if(res.status === 200){
            setReReand(true)
            console.log('hellow');
        }else{
            alert('There was an Error')
            console.log(res)
        }
        setReReand(false)

    };
    const handelsaveNewItem = ()=>{
                HandlPost()
                setDisplayState(false)
    
    }
    // taking the data from localstroge
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
    useEffect(()=>{
        // let savedTodo = JSON.parse(localStorage.getItem('todolistItem'))
    },[])
 
    return(
        <div className=' w-full h-full absolute top-0 left-0 z-index-10  bg-shadow'>
            <div className=" w-637 p-5 bg-white absolute z-index-4 top-1/4 right-31%   flex flex-col justify-start items-center rounded-md">
                 {/* title */}
                <div className="flex flex-row-reverse justify-between item-center  w-full mb-14 ">
                    <button onClick={()=>setDisplayState(false)} className="mb-1 text-[30px] text-5xl  ml-6 text-gray_fac">&times;</button>
                    <div className=" flex flex-row justify-center items-center mr-8">
                    <div className="w-1.5 mt-2 h-10 rounded-md bg-black ml-2 "></div>
                       <h1 className="mb-1 font-Estedad font-bold text-black  text-btnS " >مورد جدید</h1>
                       <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
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
                          className="w-282 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl "/>
                        <div>
                          <input
                             value={key}
                             
                             onChange={handleInputChange} 
                             placeholder='کلید'
                             className='w-282 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl '/>
                             {error && <p style={{ color: 'red' }} className=" text-right pr-4 mt-2" >{error}</p>}
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-around items-start">
                        <textarea
                         className="w-282 h-88px py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl resize-none "
                          placeholder='ملاحضات'
                          value={desc}
                          onChange={(e)=>setDesc(e.target.value)}
                          >
                            
                          </textarea>
                        {/* <textarea name="" id="" cols="10" rows="10"></textarea> */}
                        <input
                         type="text"
                         value={title}
                         onChange={(e)=>setTitle(e.target.value)}
                         placeholder="عنوان"
                         className="w-282 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl "/>
                     </div>
                     {/* {
                        dispaly2 &&
                       <h1 className='text-error'>All values ​​are required to register the invoice</h1>
                     } */}
                </div>
                 {/* main subment buttons */}
                <div className="w-full px-2 flex flex-row-reverse justify-start items-start mt-10">
                     <button onClick={()=>handelsaveNewItem()}  className="  bg-btn text-white text-2xl py-3 px-5  pb-5 font-medium rounded-md ml-6 mr-5  ">  ثبت کردن</button> 
                    <button onClick={()=>setDisplayState(false)} className=" text-black  bg-gray_button w-52  rounded-md text-2xl py-4 px-5 te">لغو</button>
                </div>
            </div>    
        </div>
    )
}
export default SaveNewProduct
