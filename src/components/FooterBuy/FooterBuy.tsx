import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { style } from "../../assets/style/styles";
const FooterBuy = ({
  pageNext,
  setPageNext,
  totalPost,
  setCurrentPage,
  postsPerPage,
  currentPage,
  pageNumbers,
  totalPages,
}: any) => {
  return (
    <>
      {true && (
        <div className="p-4 text-center justify-self-end">
          <ul className="flex justify-center space-x-1">
            <li>
              <button
                className="w-12 h-10 flex items-center justify-center   border border-gray-300  rounded text-gray-500 hover:text-blue-500 ml-1"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <BsChevronRight />
              </button>
            </li>
            {pageNumbers.map((pageNumber: any) => (
              <li key={pageNumber}>
                <button
                  className={`w-12 h-10 flex items-center justify-center  border border-gray-300  rounded ${
                    pageNumber === currentPage
                      ? "bg-btn text-white border border-gray-300"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            <li>
              <button
                className="w-12 h-10 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:text-blue-500"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <BsChevronLeft />
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default FooterBuy;
