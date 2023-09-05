import React, { useEffect } from "react";
import { style } from "../assets/style/styles";
import HeaderSell from "../components/HeaderSell/HeaderSell";
import { BodyBuy } from "../components/BodyBuy/BodyBuy";
import { BodySell } from "../components/BodySell/BodySell";
import { useState } from "react";
import FooterSell from "../components/FooterSell/FooterSell";
import axios from "axios";
import { getJWT } from "../shared";
const Page2 = () => {
  const [pageNext, setPageNext] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5Mzg5MjQ4MywianRpIjoiMjNiODIxMTgtZTdlMi00YzFiLTgyNjAtYWZhOTJmYTg5NzEyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5Mzg5MjQ4MywiZXhwIjoxNjkzOTc4ODgzfQ.OAOU4On0D11FgkIKqr3dMs4GOVmLCSACB1sg-LfNWDc";

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
        } else {
          console.log("Received status:", response.status);
          console.log(response.data);
        }
      } catch (error) {
        // console.log("Error message:", error.message);
        console.error("Error details:", error);
      }
    }

    fetchData();
  }, []);
  const [post, setPost] = useState(12);
  const lastPostIndex = currentPage * post;
  const firstPostIndex = lastPostIndex - post;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  let totalPages = Math.ceil(data.length / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentItems = data.slice(startIndex, endIndex);
  let nums = [...Array(totalPages + 1).keys()].slice(1);

  const updatePagination = () => {
    currentItems = data.slice(startIndex, endIndex);
    totalPages = Math.ceil(data.length / itemsPerPage);
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

  return (
    <>
      <div className={`p-5 w-full  ${style.col} items-center justify-center`}>
        <div className={`shadow-xl rounded-xl w-full py-5 px-2`}>
          <HeaderSell />
          <BodySell
            pageNext={pageNext}
            setPageNext={setPageNext}
            data={currentPost}
            setData={setData}
            currentItems={currentItems}
          />
          <FooterSell
            pageNext={pageNext}
            setPageNext={setPageNext}
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

export default Page2;
