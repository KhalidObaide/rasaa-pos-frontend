import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { style } from "../../assets/style/styles";
const FooterBuy = ({
  pageNext,
  setPageNext,
  totalPost,
  setCurrentPage,
  postsPerPage,
}: any) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }
  const nextPage1 = () => {
    setPageNext(false);
  };
  const nextPage2 = () => {
    setPageNext(true);
  };
  return (
    <>
      {/* <div className={`${style.row} items-center mt-5 justify-center w-full`}>
        <div className={`${style.row} items-center gap-x-2`}>
          <button
            className={`w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500"`}
          >
            <BsChevronRight className={` text-xl`} />
          </button>
          <button
            className={`${(style.row, style.page)} ${
              pageNext == false ? "bg-btn text-white" : "bg-white"
            }`}
            onClick={nextPage1}
          >
            1
          </button>
          <button
            className={`${(style.row, style.page)} ${
              pageNext == true ? "bg-btn text-white" : "bg-white"
            }`}
            onClick={nextPage2}
          >
            2
          </button>
          <button
            className={`${(style.row, style.page)} }`}
            onClick={nextPage2}
          >
            3
          </button>
          <button className={`${(style.row, style.page)}`}>...</button>
          <button
            className={`w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500"`}
          >
            <BsChevronLeft className={`text-xl`} />
          </button>
        </div>
      </div> */}
      <div className={`${style.row} items-center justify-center w-full gap-x-3 mt-3`}>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`py-2 border border-gray-200 rounded-md  px-4`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FooterBuy;
