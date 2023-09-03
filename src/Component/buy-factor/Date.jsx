import React from 'react'
import DatePicker from "react-multi-date-picker"
import { BsChevronDown } from "react-icons/bs";
import image from '../../assets/image/image.png'
const Date = ({serDate,date}) => {
  return (
    <label htmlFor="">
       <div className={`flex flex-row-reverse justify-center items-center `}>
  
  <label htmlFor="date" className={`cursor-pointer`}><BsChevronDown/></label>

<DatePicker
    id='date'
    inputClass="custom-input"
    style={{
      outline: "none",
      fontFamily: "Estedad",
      cursor: "pointer",
      // background : 'green',
      width : '250px',
      textAlign : 'right'
    }}
    placeholder='تعیین تاریخ'
  />
  <img className="w-5 h-5 ml-5" src={image} alt="" />
</div>
    </label>
  )
}
export default Date
