import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { style } from "../assets/style/styles";
import { BodyBuy } from "../components/BodyBuy/BodyBuy";
import axios from "axios";
import FooterBuy from "../components/FooterBuy/FooterBuy";
import { getJWT } from "../shared";
import appSettings from "../app.settings.json";
import Date from "../components/Date/Date";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TbLoader } from "react-icons/tb";
const jwt  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NjgzNjUxMSwianRpIjoiYTI4NmRhODMtNmU1Mi00NmRmLTgxNTctOTRkZGU2ZGMxN2ExIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImVlYWEzYmU2LTE1MDktNDViMi1iN2I3LWQzZGMxODY3YzA1ZiIsIm5iZiI6MTY5NjgzNjUxMSwiZXhwIjoxNjk2OTIyOTExfQ.g9c1KpmYDjaEpsu8l8oh9Byrc-eKUg0XZonrCunsSSo"
export const Home = () => {
  const [pageNext, setPageNext] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const filteredData = data.filter((item: any) => {
    const employeeNameMatch =
      item.contact &&
      item.contact.toString().toLowerCase().includes(search.toLowerCase());
    const employeeLastNameMatch =
      item.invoice_num &&
      item.invoice_num.toString().toLowerCase().includes(search.toLowerCase());
    return employeeNameMatch || employeeLastNameMatch;
  });
 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://lajward-mis.dev:8005/invoices`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (response.status === 200) {
          console.log("Data fetched successfully:", response.data);
          setData(response.data);
          setLoader(false);
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
  const getValue = (e: any) => {
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
            loader={loader}
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
