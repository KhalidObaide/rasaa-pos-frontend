import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { style } from "../../assets/style/styles";
const FooterSell = ({
  totalPost,
  setCurrentPage,
  postsPerPage,
}: any) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
     
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

export default FooterSell;
