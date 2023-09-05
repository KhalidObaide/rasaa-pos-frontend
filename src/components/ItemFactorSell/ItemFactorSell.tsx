import React, { useState } from "react";
import { style } from "../../assets/style/styles";
import HeaderFactorItemSell from "./HeaderItemFac/HeaderFactorItemSell";
import BodyFactorItemSell from "./BodyItem/BodyFactorItemSell";
import Text from "../Text";
import Remove from "../ItemFactorBuy/RemoveAll/Remove";
import RemoveAllSell from "./RemoveAll/RemoveAllSell";
import { useParams } from "react-router-dom";
const ItemFactorSell = () => {
  const [data, setData] = useState(Text);
  const [edit, setEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const [arr, setArr] = useState(Text);
  const [apiData, setApiData] = useState();
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
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
          <BodyFactorItemSell arr={arr} setArr={setArr} edit={edit} id={id} />
          <RemoveAllSell
            setOpen={setOpen}
            open={open}
            id={id}
          />
        </div>
      </div>
    </>
  );
};

export default ItemFactorSell;
