import React from "react";
import { style } from "../../assets/style/styles";
import {TbLoader} from "react-icons/tb"
import {CiWarning} from 'react-icons/ci'
// import

const RemoveAll = ({startDelet,deletLoader,setDispalyDelet,dispalyDelet}:any)=>{
    const handCancellingDelet = ()=>{
      console.log(dispalyDelet);
      setDispalyDelet(false)
      console.log(dispalyDelet);

      
    }
    return(
        <div
        className={` fixed  top-0 left-0 right-0 bottom-0 ${
          style.row
        } items-center justify-center w-full $hidden bg-[rgba(0,0,0,0.3)] h-[100%]`}
      >
        <div className={`w-[25%] bg-white rounded-xl`}>
          <div
            className={`bg-error text-center rounded-t-xl ${style.row} items-center justify-center py-6 w-full`}
          >
            <CiWarning className="text-[80px] text-white" />
          </div>
          <div className={`${style.col} items-center justify-center gap-y-5 p-5`}>
            <h1 className={`font-bold text-2xl`}>هشدار !</h1>
            <p className={`w-full font-bold text-[#616161]`}>
              آیا از حذف فاکتور مطمئن هستید؟!
            </p>
            <div
              className={`${style.row} items-center justify-end w-full gap-x-4`}
            >
              <button
                onClick={()=>handCancellingDelet()}
                className={`px-4 py-2 bg-gray-100 rounded-md`}
                // onClick={reject}
              >
                لغو
              </button>
              {/* <Link to="/Sell"> */}
                {
                    deletLoader == true ? <button className="px-5 py-2 text-white rounded-md bg-error"><TbLoader className="animate-spin bg-error w-5 h-5"/></button>: <button onClick={()=>startDelet()} className={`px-5 py-2 text-white rounded-md bg-error`}>حذف کردن</button>
                }
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    )
}
export default RemoveAll