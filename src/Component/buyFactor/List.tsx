import React, { useState, useEffect } from 'react';

const List = ({ number,  pricePer, setTotalAmount }: any) => {
  const [calculate, setCalculate] = useState(pricePer * number);
  const [tableRows, setTableRows] = useState(["1"]);
  const [counter, setCounter] = useState(tableRows.length);
  const [inputValues, setInputValues] = useState([]);
  const [quantityValues, setQuantityValues] = useState([]);
  const [priceValues, setPriceValues] = useState([]);
  const [singlePrice, setSinglePrice] = useState([]);
  const [practice, setPractice] = useState([]);

  // practice
  const [test ,setTest] = useState(true)

  useEffect(()=>{
    // console.log('this is the fucking',practice);
    
    let a  = 0
    practice.forEach(data =>a+=data)
    // console.log(a);
    setTotalAmount(a)
  })
 let a = [1,2,3,45]
  
  function addRow(index) {
   if (inputValues[index]&&quantityValues[index]&&priceValues[index]&& !practice.includes(index)) {
    setCounter(counter + 1);
    setTableRows([...tableRows, counter + 1]);
    setInputValues([...inputValues, ""]);
    setQuantityValues([...quantityValues, ""]);
    setPriceValues([...priceValues, ""]);
    setSinglePrice([...singlePrice, ""]);
    
    const calculate = parseFloat(quantityValues[index]) * parseFloat(priceValues[index]);
    
    setPractice([...practice, calculate,index]);
    
    

   }else{
    alert(`a factor is add in this in fo`+practice.includes(index))
   }

  }
  const sumNumbers = () => {
    console.log(inputValues);
    console.log(quantityValues);
    console.log(priceValues);
    console.log(singlePrice);
    
  }

  return (
    <>
      {/* <button onClick={addRow}>Add Row</button> */}
      <div className="flex flex-col ml-16">
        <div className="flex flex-row items-center mb-2">
          <div className="flex flex-row justify-center items-center rounded-md w-10 h-10 bg-chart font-normal mx-2">
            No
          </div>
          <div className="w-72 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            نام جنس فروخته شده
          </div>
          <div className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            تعداد
          </div>
          <div className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            قیمت فی
          </div>
          <div className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-chart">
            مجموعه
          </div>
        </div>
          {tableRows.map((row, index) => (
          <div key={index} className="flex flex-row items-center mb-2">
            <div className="flex flex-row justify-center items-center rounded-md w-10 h-10 bg-chart font-normal mx-2">
              {index + 1}
            </div>
            <input
              type="text"
              className="w-72 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine"
              value={inputValues[index]}
              onChange={(e) => {
                const updatedInputValues = [...inputValues];
                updatedInputValues[index] = e.target.value;
                setInputValues(updatedInputValues);
              }}
             
            />
            <input
              type="text"
              className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg  bg-grayLine"
              value={quantityValues[index]}
              onChange={(e) => {
                const updatedQuantityValues = [...quantityValues];
                updatedQuantityValues[index] = e.target.value;
                setQuantityValues(updatedQuantityValues);
              }}
         
            />
                <input
                  type="text"
                  className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine"
                  value={priceValues[index]}
                  onChange={(e) => {
                    const updatedPriceValues = [...priceValues];
                    updatedPriceValues[index] = e.target.value;
                    setPriceValues(updatedPriceValues);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addRow(index)
                    }
                  }}
                />
            <div className="">
              <input className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine" value={ parseFloat(quantityValues[index]) * parseFloat(priceValues[index]) || 0}type="text" 
              />
            </div>
          </div>
        ))}
        <button  onClick={() => sumNumbers()}>Calculate</button>
      </div>
    </>
  );
}

export default List;