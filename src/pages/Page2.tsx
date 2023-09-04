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
  const [data, setData] = useState([]);
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
  const [currentPage, setCurrentPage] = useState(1);
  const [post, setPost] = useState(12);
  const lastPostIndex = currentPage * post;
  const firstPostIndex = lastPostIndex - post;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);
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
          />
          <FooterSell
            pageNext={pageNext}
            setPageNext={setPageNext}
            totalPost={data.length}
            postsPerPage={post}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Page2;
