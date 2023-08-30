import React from "react";
import { useState } from "react";
import HeaderFac from "./HeaderItemFactor/HeaderFac";
import Text from "../Text";
import Remove from "./RemoveAll/Remove";
import BodyItem from "./BodyItemFactor/BodyItem";
import FooterItem from "./FooterItemFac/FooterItem";
const ItemFactor = () => {
  const [data, setData] = useState(Text);
  const [edit, setEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState(Text);
  console.log(arr)
  const [apiData, setApiData] = useState();
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
        <FooterItem />
        <Remove open={open} setOpen={setOpen}  />
      </div>
    </>
  );
};

export default ItemFactor;
