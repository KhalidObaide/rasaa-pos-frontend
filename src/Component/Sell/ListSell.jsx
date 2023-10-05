// this the new sell List
import React, { useState, useEffect } from "react";
// import  style  from './List.module.css';
const ListSell = ({setPayBalAmount,factorInfo}) => {
  const [tableRows, setTableRows] = useState(["1"]);
  const [counter, setCounter] = useState(tableRows.length);
  const [inputValues, setInputValues] = useState([]);
  const [quantityValues, setQuantityValues] = useState([]);
  const [priceValues, setPriceValues] = useState([]);
  const [mount, setMount] = useState([]);
  const [singlePrice, setSinglePrice] = useState([]);
  const [practice, setPractice] = useState([]);
  const [checkNewList, setCheckNewList] = useState([]);
  useEffect(() => {
    let totalAmount = 0;
    practice.forEach((data) => (totalAmount += data));
    setPayBalAmount(totalAmount);
  });
  // start maping fro each paer
  function addRow(index) {
    if (
      inputValues[index] &&
      quantityValues[index] &&
      priceValues[index] &&
      !checkNewList.includes(index)
    ) {
      setCounter(counter + 1);
      setTableRows([...tableRows, counter + 1]);
      setInputValues([...inputValues, ""]);
      setQuantityValues([...quantityValues, ""]);
      setMount([...mount, ""]);
      setPriceValues([...priceValues, ""]);
      setSinglePrice([...singlePrice, ""]);

      const calculate =
        parseFloat(quantityValues[index]) * parseFloat(priceValues[index]);
      setPractice([...practice, calculate]);
      setCheckNewList([index]);
      // CRATING A OBJEACT FOR EACH FACTOR ITEM
      const singleFactorInfo = {
        title  : inputValues[index],
        amount : quantityValues[index],
        price : priceValues[index] 
      }
      factorInfo.push(singleFactorInfo)
    }
  }

  return (
    <>
      <div className="flex flex-col ml-16">
        <div className="flex flex-row items-center mb-2">
          <div className="flex flex-row justify-center items-center rounded-md w-10 h-10 bg-chart font-normal mx-2">
            No
          </div>
          <div className="w-72 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            نام جنس فروخته شده
          </div>
          <div className="w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            تعداد
          </div>
          <div className="w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            واحد
          </div>
          <div className="w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            قیمت فی
          </div>
          <div className="w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            مجموعه
          </div>
        </div>
        {tableRows.map((row, index) => (
          <div key={index} className="flex flex-row items-center mb-2 md:flex-col">
            <div className="flex flex-row justify-center items-center rounded-md w-10 h-10 bg-chart font-normal mx-2">
              {index + 1}
            </div>
            <input
              type="text"
              className="w-72 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine outline-none"
              value={inputValues[index]}
              onChange={(e) => {
                const updatedInputValues = [...inputValues];
                updatedInputValues[index] = e.target.value;
                setInputValues(updatedInputValues);
              }}
            />
            <input
              type="text"
              className={`w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg  bg-grayLine outline-none`}
              value={quantityValues[index]}
              onChange={(e) => {
                const updatedQuantityValues = [...quantityValues];
                updatedQuantityValues[index] = e.target.value;
                setQuantityValues(updatedQuantityValues);
              }}
              onKeyPress={(e) => {
                const keyCode = e.which || e.keyCode;
                const keyValue = String.fromCharCode(keyCode);
                if (!/^\d+$/.test(keyValue)) {
                  e.preventDefault();
                }
              }}
            />

            <input
              type="text"
              className={`w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine outline-none`}
              value={mount[index]}
              onChange={(e) => {
                const ubdataMount = [...mount];
                ubdataMount[index] = e.target.value;
                setMount(ubdataMount);
              }}
            />

            <input
              type="text"
              className="w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine outline-none"
              value={priceValues[index]}
              onChange={(e) => {
                const updatedPriceValues = [...priceValues];
                updatedPriceValues[index] = e.target.value;
                setPriceValues(updatedPriceValues);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addRow(index);
                }
                const keyCode = e.which || e.keyCode;
                const keyValue = String.fromCharCode(keyCode);
                if (!/^\d+$/.test(keyValue)) {
                  e.preventDefault();
                }
              }}
            />
            <div className="">
              <input
                className="w-44 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine outline-none"
                value={
                  parseFloat(quantityValues[index]) *
                    parseFloat(priceValues[index]) || ""
                }
                type="text"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListSell;
