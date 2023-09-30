import React, { useState } from "react";

import { style } from "../../assets/style/styles";
function OverTimeTableBody({ Text }: any, { pageNum }: any) {

  const [selectEmployee, setSelectEmployee] = useState(Text);
  const [showEmployee, setShowEmployee] = useState(false);


  return (
    <div>
      {Text.map((val:any , index:any) =>{
        <div className={`${style.row} items-center p-5`}>
          <div>{index + 1}</div>
          <div>{val.fName}</div>
          <div>{val.FNumber}</div>
          <div>{val.howMany}</div>
          <div>{val.collect}</div>
        </div>
      })}
    </div>
  );
}

export default OverTimeTableBody;


