import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { style } from "../../assets/style/styles";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
export default function Date() {
  const [top, setTop] = useState(false);
  const [getValue, setGetValue] = useState("");

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
  console.log(getValue);
  return (
    <>
      <DatePicker
        onChange={(date: any) => {
          // setFormData({ ...formData, date: date.toDate() });
          setGetValue(date.toDate());

          // console.log('this is the date :', date.toDate())
        }}
        months={months} 
        render={(value: any, openCalendar: any) => (
          <>
            <div
              className={`${style.row} items-center w-[250px] justify-between border border-gray-300 py-2 px-5 rounded-md `}
              onClick={() => {
                setTop(!top);
                openCalendar();
              }}
              onBlur={() => {
                setTop(false);
              }}
              tabIndex={0}
            >
              <div className={`${style.row} items-center gap-x-2`}>
                <IoCalendarOutline className={`text-2xl text-gray-900`} />
                <div className={`text-gray-900`}>
                  {value === "" ? "تعیین تاریخ..." : `${value}`}
                </div>
              </div>
              <div>
                {top ? (
                  <BiChevronUp className={`text-2xl text-gray-900`} />
                ) : (
                  <BiChevronDown className={`text-2xl text-gray-900`} />
                )}
              </div>

            </div>
          </>
        )}
        calendarPosition="bottom-right"
        calendar={persian}
        weekDays={weekDays}
        locale={persian_fa}
        inputClass="outline-none cursor-pointer"
      />
    </>
  );
}
