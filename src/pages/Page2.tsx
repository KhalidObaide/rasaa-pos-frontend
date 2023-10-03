import React, { useEffect } from "react";
import { style } from "../assets/style/styles";
import { BodyBuy } from "../components/BodyBuy/BodyBuy";
import { BodySell } from "../components/BodySell/BodySell";
import { useState } from "react";
import FooterSell from "../components/FooterSell/FooterSell";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { getJWT } from "../shared";
const Page2 = () => {
  const [search, setSearch] = useState("");
  const [pageNext, setPageNext] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loader , setLodaer] = useState(true)

  const filteredData = data.filter((item: any) => {
    const employeeNameMatch = item.contact && item.contact.toString().toLowerCase().includes(search.toLowerCase());
    const employeeLastNameMatch = item.invoice_num && item.invoice_num.toString().toLowerCase().includes(search.toLowerCase());
    return employeeNameMatch || employeeLastNameMatch;
  });
  const jwt = getJWT()
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
          setLodaer(false)
        } else {
          console.log("Received status:", response.status);
        }
      } catch (error) {
        console.error("Error details:", error);
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
  const getValue = (e:any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={`p-5 w-full  ${style.col} items-center justify-center`}>
        <div className={`shadow-xl rounded-xl w-full py-5 px-2`}>
          <div className={`${style.row} items-center justify-between w-full`}>
            <div>
              <h1 className={`border-r-4 border-black pr-2 font-bold text-lg`}>
                فروش
              </h1>
            </div>
            <div className={`${style.row} items-center`}>
              <div className={`${style.row} items-center gap-x-5`}>
                <div
                  className={`${style.row} bg-white items-center justify-between px-5 w-[360px] font-medium rounded-md drop-shadow-xl`}
                >
                  <input
                    type="text"
                    placeholder="جستجو..."
                    className={`outline-none px-5   py-3`}
                    onChange={getValue}
                  />
                  <button>
                    <CiSearch className={`text-3xl`} />
                  </button>
                </div>
                <Link
                  to="/SellFactor"
                  className={`text-white  font-medium bg-btn py-3 px-4 rounded-md`}
                >
                  ثبت فاکتور فروش
                </Link>
              </div>
            </div>
          </div>
          <BodySell
            pageNext={pageNext}
            setPageNext={setPageNext}
            data={currentPost}
            setData={setData}
            currentItems={currentItems}
            search={search}
            loader={loader}
          />
          <FooterSell
            pageNext={pageNext}
            setPageNext={setPageNext}
            totalPost={filteredData.length}
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

export default Page2;
