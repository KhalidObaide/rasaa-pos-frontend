import React from 'react'
import DatePicker from "react-multi-date-picker"
import { BsChevronDown } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import style from '../assets/styles/styles';
import { calendar } from '../assets/img';
const Date = () => {
  return (
    <div className={`border border-gray-100 py-2 px-5 rounded-md ${style.row} items-center justify-center ${style.font}`}>
      <label htmlFor="date" className={`cursor-pointer`}>
        <img src={calendar} className='w-[24px] h-[24px] ml-5' />
      </label>
      <DatePicker
        id='date'
        inputClass="custom-input"
        style={{
          outline: "none",
          fontFamily: "Estedad",
          cursor: "pointer",
        }}
        placeholder='تعیین تاریخ...'
      />
      <label htmlFor="date" className={`cursor-pointer`}><BsChevronDown className='text-gray-500' /></label>
    </div>
 
  )
}
export default Date
