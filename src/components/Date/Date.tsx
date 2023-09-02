import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { style } from "../../assets/style/styles";
import { BiChevronDown } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
export default function Date() {
  return (
    <div
      className={`${style.row} items-center gap-x-2 border border-gray-200 rounded-md py-2 px-3`}
    >
      <label htmlFor="date">
        <IoCalendarOutline className="text-gray-500 text-2xl cursor-pointer" />
      </label>
      <div style={{ direction: "rtl" }} className={`cursor-pointer`}>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          placeholder="تعیین تاریخ..."
          inputClass="outline-none cursor-pointer"
          id="date"
        />
      </div>
      <label htmlFor="date">
        <BiChevronDown className="text-3xl text-gray-500 cursor-pointer" />
      </label>
    </div>
  );
}
