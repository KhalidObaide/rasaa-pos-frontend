import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { style } from "../assets/style/styles";
import Hearder from "../components/HeaderHome.jsx/Hearder";
import { BodyBuy } from "../components/BodyBuy/BodyBuy";
import axios from "axios";
import Text from "../components/Text";
import FooterBuy from "../components/FooterBuy/FooterBuy";
import { getJWT } from "../shared";
import Date from "../components/Date/Date";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Home = () => {
  const [pageNext, setPageNext] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const [data, setData] = useState([]);
  const filteredData = data.filter((item) =>
    item.contact.toLowerCase().includes(search.toLowerCase())
  );
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTYzNTk2NSwianRpIjoiMjI1MGFlZWUtYTg3YS00YWI2LTkwZWYtNGY1ODU5ZGY0MjgwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5NTYzNTk2NSwiZXhwIjoxNjk1NzIyMzY1fQ.YHp2q3Wnu3u41KA0c58elr139qDQ1tuRSHBVBeyZ8Nc";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://lajward-mis.dev:8005/invoices`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Data fetched successfully:", response.data);
          setData(response.data);
          console.log(typeof data);
        } else {
          console.log("Received status:", response.status);
          console.log(response.data);
        }
      } catch (error) {
        alert("مشکلی پیش اماده است لطفا صفحه را دوباره باز کنید.");
      }
    }

    fetchData();
  }, []);
  const [post, setPost] = useState(12);
  const lastPostIndex = currentPage * post;
  const firstPostIndex = lastPostIndex - post;
  const currentPost = filteredData.slice(firstPostIndex, lastPostIndex);

  let totalPages = Math.ceil(filteredData.length / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentItems = filteredData.slice(startIndex, endIndex);
  let nums = [...Array(totalPages + 1).keys()].slice(1);

  const updatePagination = () => {
    currentItems = filteredData.slice(startIndex, endIndex);
    totalPages = Math.ceil(filteredData.length / itemsPerPage);
    nums = [...Array(totalPages + 1).keys()].slice(1);
  };
  const pageNumbers = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage === 1) {
      pageNumbers.push(1, 2, 3);
    } else if (currentPage === totalPages) {
      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
    }
  }
  const getValue = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className={`${style.col} justify-center items-center p-5 w-full`}>
        <div className={`${style.col} rounded-lg shadow-lg w-full p-5`}>
          <div className={`${style.row} items-center justify-between w-full`}>
            <div className={`${style.row} items-center gap-x-8`}>
              <h1 className={`border-r-4 border-black pr-2 font-bold text-lg`}>
                خرید
              </h1>
              <Date />
            </div>
            <div className={`${style.row} items-center gap-x-5`}>
              <div
                className={`${style.row} bg-white items-center justify-between px-4 w-[360px] py-1 font-medium rounded-md drop-shadow-xl`}
              >
                <input
                  type="text"
                  placeholder="جستجو..."
                  className={`outline-none px-5 py-2`}
                  onChange={getValue}
                />
                <button>
                  <CiSearch className={`text-3xl`} />
                </button>
              </div>
              <Link
                to="/BuyFactor"
                className={`text-white  font-medium bg-btn py-3 px-4 rounded-md`}
              >
                ثبت فاکتور خرید
              </Link>
            </div>
          </div>
          <BodyBuy
            setData={setData}
            pageNext={pageNext}
            setPageNext={setPageNext}
            currentItems={currentItems}
          />
          <FooterBuy
            totalPost={data.length}
            postsPerPage={post}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
};
