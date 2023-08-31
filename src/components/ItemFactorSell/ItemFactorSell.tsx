import React, { useState } from "react";
import { style } from "../../assets/style/styles";
import HeaderFactorItemSell from "./HeaderItemFac/HeaderFactorItemSell";
import BodyFactorItemSell from "./BodyItem/BodyFactorItemSell";
import Text from "../Text";
const ItemFactorSell = () => {
  const [data, setData] = useState(Text);
  const [edit, setEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState(Text);
  const [apiData, setApiData] = useState();
  return (
    <>
      <div className={`${style.col} items-center justify-center w-full p-5`}>
        <div className={`shadow-xl py-4 px-4 rounded-xl w-full`}>
          <HeaderFactorItemSell
            data={data}
            arr={arr}
            setArr={setArr}
            edit={edit}
            setOpen={setOpen}
            apiData={apiData}
            setEdit={setEdit}
            setData={setData}
          />
          <BodyFactorItemSell arr={arr} setArr={setArr} edit={edit} />
        </div>
      </div>
    </>
  );
};

export default ItemFactorSell;
