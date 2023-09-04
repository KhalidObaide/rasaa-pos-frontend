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
          setData(response.data)
        } else {
          console.log("Received status:", response.status);
          console.log(response.data);

          console.log()
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
      <div className={`${style.col} justify-center items-center p-5 w-full`}>
        <div className={`${style.col} rounded-lg shadow-lg w-full p-5`}>
          <Hearder />
          <BodyBuy
            data={currentPost}
            setData={setData}
            pageNext={pageNext}
            setPageNext={setPageNext}
          />
          <FooterBuy totalPost={data.length} postsPerPage={post} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  );
};
