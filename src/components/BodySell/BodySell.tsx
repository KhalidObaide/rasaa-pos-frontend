import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Text from '../Text';
import { style } from '../../assets/style/styles';
const BodySell = ({pageNext ,setPageNext}:any) => {
  const [arr , setArr] = useState(Text)

  return (
    <>
    <div
        className={`${style.col} items-start mt-5 w-full ${
          pageNext == true ? "hidden" : "flex"
        }`}
      >
        <div className={`${style.row} items-center p-0 w-full`}>
          <div className={`${style.chartHeader} w-10`}>NO</div>
          <div className={`${style.chartHeader} w-1/5`}>نام فروشنده</div>
          <div className={`${style.chartHeader} w-1/5`}>شماره فاکتور</div>
          <div className={`${style.chartHeader} w-1/5`}>تاریخ</div>
          <div className={`${style.chartHeader} w-1/5`}>تعداد اقلام</div>
          <div className={`${style.chartHeader} w-1/5`}>مجموع کل</div>
        </div>
        <div className={`${style.col} items-center p-0 w-full`}>
          {arr == null
            ? ""
            : arr.map((item, index) => {
                return (
                  <Link
                    to="/itemFactor/sell"
                    className={`${style.row} items-center p-0 w-full`}
                  >
                    <div className={`${style.row} items-center p-0 w-full`}>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }  w-10 `}
                      >
                        {index + 1}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }   w-1/5`}
                      >
                        {item.fName}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }  w-1/5`}
                      >
                        {item.howMany}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }   w-1/5`}
                      >
                        {item.data}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }   w-1/5`}
                      >
                        {item.howMany}
                      </div>
                      <div
                        key={index}
                        className={`${style.chart} ${
                          index % 2 ? "bg-gray-100" : "bg-white"
                        }  w-1/5`}
                      >
                        {item.FNumber * item.howMany}
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    </>
  )
}

export default BodySell