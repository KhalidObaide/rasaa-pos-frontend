import React from "react";
const SaveNewFac = ()=>{
    return(
        <div className=' w-full h-full absolute top-0 left-0 z-index-10  bg-shadow'>
        <div className=" w-637 p-5 bg-white absolute z-index-4 top-1/4 right-31%   flex flex-col justify-start items-center rounded-md">
             {/* title */}
            <div className="flex flex-row-reverse justify-between item-center  w-full mb-14 ">
                <button className="mb-1 text-[30px] text-5xl  ml-6 text-gray_fac">&times;</button>
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
                  
                      type="text"   
                      placeholder="مقدار" 
                      className="w-282 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl "/>
                    <div>
                      <input
                        
                         placeholder='کلید'
                         className='w-282 h-16 py-4 px-2 pr-5 text-right border-solid border border-gray_line rounded-md outline-none mx-2 text-2xl '/>
                       
                    </div>
                </div>
                <div className="flex flex-row justify-end items-start w-full ml-20">
                    <div className="flex flex-row justify-center items-center">
                        <h1 className="text-lg"><span>100%</span> پرداخت شد  </h1>
                        <div className="w-7 h-7 border-2 border-btn rounded-md mr-4 "></div>
                    </div>
                </div>
                 {/* {
                    dispaly2 &&
                   <h1 className='text-error'>All values ​​are required to register the invoice</h1>
                 } */}
            </div>
             {/* main subment buttons */}
            <div className="w-full px-2 flex flex-row-reverse justify-start items-start mt-10">
                 <button  className="  bg-btn text-white text-lg py-3 px-5  pb-5 font-medium rounded-md ml-6 mr-5  ">  ثبت کردن</button> 
                <button className=" text-black  bg-gray_button w-52  rounded-md text-2xl py-4 px-5 te">لغو</button>
            </div>
        </div>    
    </div>
    )
}
export default SaveNewFac