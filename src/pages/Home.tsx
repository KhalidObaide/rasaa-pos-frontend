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
export const Home = () => {
  const [pageNext, setPageNext] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5Mzg5MjQ4MywianRpIjoiMjNiODIxMTgtZTdlMi00YzFiLTgyNjAtYWZhOTJmYTg5NzEyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5Mzg5MjQ4MywiZXhwIjoxNjkzOTc4ODgzfQ.OAOU4On0D11FgkIKqr3dMs4GOVmLCSACB1sg-LfNWDc";

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

          console.log();
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
      <div className={`${style.col} justify-center items-center p-5 w-full`}>
        <div className={`${style.col} rounded-lg shadow-lg w-full p-5`}>
          <Hearder />
          <BodyBuy
            data={currentPost}
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
