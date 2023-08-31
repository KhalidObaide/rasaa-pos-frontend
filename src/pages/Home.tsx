import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { style } from "../assets/style/styles";
import Hearder from "../components/HeaderHome.jsx/Hearder";
import { BodyBuy } from "../components/BodyBuy/BodyBuy";
import axios from 'axios' ; 
import FooterBuy from "../components/FooterBuy/FooterBuy";
export const Home = () => {
  const [pageNext, setPageNext] = useState(false);
  const [data ,setData] = useState()
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzQ1Mzk2OCwianRpIjoiN2U5MmYzYmMtZWQzYy00YjdlLTlhMDctYTMxYTIyNmRjYmMyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzQ1Mzk2OCwiZXhwIjoxNjkzNTQwMzY4fQ.vbIP9wznDZyE8hM7TpML1VHREGPJV9E4097dgtFIrM8";

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
          setData(response.data)
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
  return (
    <>
      <div className={`${style.col} justify-center items-center p-5 w-full`}>
        <div className={`${style.col} rounded-lg shadow-lg w-full p-5`}>
          <Hearder />
          <BodyBuy data={data} setData={setData} pageNext={pageNext} setPageNext={setPageNext} />
          <FooterBuy pageNext={pageNext} setPageNext={setPageNext} />
        </div>
      </div>
    </>
  );
};
