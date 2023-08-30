import React from "react";
import { useState } from "react";
import HeaderFac from "./HeaderItemFactor/HeaderFac";
import Text from "../Text";
import Remove from "./RemoveAll/Remove";
import BodyItem from "./BodyItemFactor/BodyItem";
const ItemFactor = () => {
  const [data, setData] = useState(Text);
  const [edit, setEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState(Text);
  const [apiData, setApiData] = useState();
  return (
    <>
      <div className="p-5 rounded-lg shadow-lg ">
        <HeaderFac
          data={data}
          arr={arr}
          setArr={setArr}
          edit={edit}
          setOpne={setOpen}
          apiData={apiData}
          setEdit={setEdit}
        />
        <BodyItem />
        <Remove open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default ItemFactor;
