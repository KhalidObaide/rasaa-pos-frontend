import React, { useEffect } from "react";
const SaveTheFator = ({emptyAll, setShowSaveM}: any) => {
  const savingFunctionEmplement = () => {   
    setShowSaveM(false)
    emptyAll()
  }
  return (
    <>
      <div
        // onClick={() => setDisplayState(false)}
        className=" w-full h-full fixed top-0 left-0  bg-shadow"
      ></div>
      <div className=" p-5 bg-white  z-index-10  fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md">
        {/* title */}
        <div className="w-full flex flex-row-reverse justify-between item-center">
          <button
            onClick={() => setShowSaveM(false)}
            className="mb-1 text-3xl ml-2 text-gray_fac"
          >
            &times;
          </button>
          <div className=" flex flex-row justify-center items-center mr-2">
            <div className="w-1  h-6 rounded-md bg-black ml-2 "></div>
            <h1 className="mb-1 font-Estedad text-black text-xl ">مبلغ  پرداخت</h1>
          </div>
        </div>

        {/* the account part */}
        <div className="flex flex-row justify-around items-center ">
          <div className="flex flex-col justify-start items-start mt-2 ">
            <h1 className="mr-2 mb-2">نام مشتری</h1>
            <input className="w-80 h-10  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg resize-none" type="text" />
          </div>
          <div className="flex flex-col justify-start items-start mt-2 ">
            <h1 className="mr-2 mb-2">مقدار قابل پرداخت </h1>
            <input className="w-80 h-10  py-2 px-2 pr-5 text-right border-solid border border-borderColor rounded-md outline-none mx-2 text-lg resize-none" type="text" />
          </div>
        </div>
        {/* the thires part presentage */}
        <div className=" flex flex-row justify-end mt-4 items-start ">
          <h1>100% پرداخت</h1>
          <div className="w-6 h-6 rounded-md border-[3px] border-solid border-btn  mx-2 "></div>
        </div>
        {/* main subment buttons */}
        <div className="w-full px-2 flex flex-row-reverse justify-start items-start mt-5">
            <button onClick={()=>savingFunctionEmplement()} className="bg-btn text-white text-lg py-2 px-4 mb-2 font-medium rounded-md  mr-5">
              ثبت کردن
            </button>
         
          <button
          onClick={()=>setShowSaveM(false)}
            className="bg-btnGray text-gray_fac text-lg py-2 px-4 mb-2 font-medium rounded-md "
          >
            لغو
          </button>
        </div>
      </div>
    </>
  );
};
export default SaveTheFator;
