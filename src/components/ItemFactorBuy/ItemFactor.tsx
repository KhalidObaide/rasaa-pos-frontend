import React, { useEffect } from "react";
import { useState } from "react";
import HeaderFac from "./HeaderItemFactor/HeaderFac";
import Text from "../Text";
import Remove from "./RemoveAll/Remove";
import BodyItem from "./BodyItemFactor/BodyItem";
import FooterItem from "./FooterItemFac/FooterItem";
import axios from "axios";

const ItemFactor = () => {
  const [data, setData] = useState();
  const [edit, setEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState(data);
  const [apiData, setApiData] = useState();
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5Mzg5MjQ4MywianRpIjoiMjNiODIxMTgtZTdlMi00YzFiLTgyNjAtYWZhOTJmYTg5NzEyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5Mzg5MjQ4MywiZXhwIjoxNjkzOTc4ODgzfQ.OAOU4On0D11FgkIKqr3dMs4GOVmLCSACB1sg-LfNWDc";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://lajward-mis.dev:8005/invoice?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        if (response.status === 200) {
          setData(response.data);
          setArr(response.data);
        } else {
          console.log("Received status:", response.status);
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
      <div className="p-5 rounded-lg shadow-lg ">
        <HeaderFac
          data={data}
          arr={arr}
          setArr={setArr}
          edit={edit}
          setOpen={setOpen}
          apiData={apiData}
          setEdit={setEdit}
          setData={setData}
        />
        <BodyItem arr={arr} setArr={setArr} edit={edit} />
        <FooterItem arr={arr} />
        <Remove open={open}  setOpen={setOpen} />
      </div>
    </>
  );
};

export default ItemFactor;
