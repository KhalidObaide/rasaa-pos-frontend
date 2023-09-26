import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-multi-date-picker";
// import calendarIcon from "../assets/img/calendar.png";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
// import { FiChevronDown, FiChevronUp } from "../helpers"

const months = [
  "حمل",
  "ثور",
  "جوزا",
  "سرطان",
  "اسد",
  "سنبله",
  "میزان",
  "عقرب",
  "قوس",
  "جدی",
  "دلو",
  "حوت",
];

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

export const MyDatePicker = (props: any) => {
  const { dateVal, setDateVal, onChange, formData, notValid, setFormData, innerText, width } = props;
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <DatePicker
      onChange={(date: any) => {
        // setFormData({ ...formData, date: date.toDate() });
        setDateVal(date.toDate());
        onChange(date.toDate());
        // console.log('this is the date :', date.toDate())
      }}
      months={months}
      value={dateVal}
      render={(value: any, openCalendar: any) => (
        <div
          className={`border ${notValid ? 'border-[#E21D12]' : 'border-dustyGray'} text-sm h-11 ${props.width} bg-transparent flex justify-between items-center px-2 rounded cursor-pointer`}
          onClick={() => {
            setShowCalendar(!showCalendar);
            openCalendar();
          }}
        >
          <div className={`flex items-center`}>
            {/* <img className="h-6 w-6" src={calendarIcon} alt="" /> */}
            <span className="block text-base text-gray3 mx-2">
              {value || props.innerText}
            </span>
          </div>
          <span className="ml-2">
            {showCalendar ? (
              <FiChevronUp className="text-center h-6 w-6 text-gray-400" />
              // <i className={`fa fa-chevron-up text-center text-gray-400`}></i>
            ) : (
              <FiChevronDown className="text-center h-6 w-6 text-gray-400" />
              // <i className={`fa fa-chevron-down text-center text-gray-400`}></i>
            )}
          </span>
        </div>
      )}
      calendarPosition="bottom-right"
      calendar={persian}
      weekDays={weekDays}
      locale={persian_fa}
    />
  );
};
