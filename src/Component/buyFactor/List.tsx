
import React, { useState, useEffect,useRef } from "react";
import SaveTheFator from './saveFactro'
const List = ({
   setTotalAmount,
   ProductInfo,
   setEmptyAllParent,
   setShowSaveM,
   showSaveM,
   EmployeeData
}:any) => {
  const [tableRows, setTableRows] = useState(["1"]);
  const [counter, setCounter] = useState(tableRows.length);
  const [inputValues, setInputValues] = useState([]);
  const [quantityValues, setQuantityValues] = useState([]);
  const [priceValues, setPriceValues] = useState([]);
  const [singlePrice, setSinglePrice] = useState([]);
  const [practice, setPractice] = useState([]);
  const [checkNewList, setCheckNewList] = useState([]);
  const [emtyAll,setEmptyAll] = useState(false)
  // the style use ref
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  
  // style states
  useEffect(() => {
   
    if (emtyAll) {
      emptyAll();
    }
  }, [emtyAll]);
  useEffect(()=>{
    
  },[])
  // the delet or have list Emty Funtion
  // Emtying the secod part of input
  const emptyAll = () => {
    setEmptyAllParent(true)
    setShowSaveM(false)
    setTotalAmount(0);
    setInputValues(new Array(tableRows.length).fill(""));
    setQuantityValues(new Array(tableRows.length).fill(""));
    setPriceValues(new Array(tableRows.length).fill(""));
    setSinglePrice(new Array(tableRows.length).fill(""));    
    setCheckNewList([])  
    console.log(checkNewList);
    setEmptyAll(false);
    if (tableRows.length > 1) {
      setTableRows(["1"]);
    }
  };
 

// the Generate new row function
  function addRow(index:any) {
    if (!checkNewList.includes(index) &&inputValues[index] && quantityValues[index] && priceValues[index]  ) {      
      setCounter(counter + 1);
      checkNewList.push(index)
      setTableRows([...tableRows, counter + 1]);
      setInputValues([...inputValues, ""]);
      setQuantityValues([...quantityValues, ""]);
      setPriceValues([...priceValues, ""]);
      setSinglePrice([...singlePrice, ""]);
      
      const calculate = parseFloat("0") * parseFloat("0"); // Calculate initial total for the new row (0 * 0)
      setPractice([...practice, calculate]);
      
      // Call a separate function to handle the new factor information
      handleNewFactorInfo(index);
      // this is the adding number
      let totalAmount = 0;
      practice.forEach((data) => (totalAmount += data));
      setTotalAmount(totalAmount);
    }
  }
  
  // Separate function to handle the new factor information
  // sending the data row ro api
  const handleNewFactorInfo = (index) => {
    const singleFactorInfo = {
      title: inputValues[index],
      amount: quantityValues[index],
      price: priceValues[index],
    };
    ProductInfo.push(singleFactorInfo);
  // saving the data to Local Storege 
  };

  // USE REF SELECT iNput function
  const handleKeyPress = (event:any, ref:any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (ref.current) {
        ref.current.focus();
      }
    }
  };


  // Rest of the JSX...

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
              className="w-72 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine outline-none"
              ref= {input1Ref[index]}
              onKeyPress={(e) => handleKeyPress(e, input2Ref)}
              value={inputValues[index]}
              onChange={(e) => {
                const updatedInputValues = [...inputValues];
                updatedInputValues[index] = e.target.value;
                setInputValues(updatedInputValues);
              }}
            />
            <input
              type="text"
              className={`w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg  bg-grayLine outline-none`}
              ref={input2Ref}
              value={quantityValues[index]}
              onChange={(e) => {
                const updatedQuantityValues = [...quantityValues];
                updatedQuantityValues[index] = e.target.value;
                setQuantityValues(updatedQuantityValues);

                
                const calculate = parseFloat(e.target.value) * parseFloat(priceValues[index]);
                const updatedPractice = [...practice];
                updatedPractice[index] = calculate;
                setPractice(updatedPractice); 
              }}
              
              onKeyPress={(e) => {
                handleKeyPress(e, input3Ref)
                const keyCode = e.which || e.keyCode;
                const keyValue = String.fromCharCode(keyCode);
                if (!/^\d+$/.test(keyValue)) {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="text"
              className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine outline-none"
              ref={input3Ref}              
              value={priceValues[index]}
              onChange={(e) => {
                const updatedPriceValues = [...priceValues];
                updatedPriceValues[index] = e.target.value;
                setPriceValues(updatedPriceValues);

                  const calculate = parseFloat(quantityValues[index]) * parseFloat(e.target.value);
                  const updatedPractice = [...practice];
                  updatedPractice[index] = calculate;
                  setPractice(updatedPractice);
              }}
              onKeyPress={(e) => {
                handleKeyPress(e, input4Ref)
                const keyCode = e.which || e.keyCode;
                const keyValue = String.fromCharCode(keyCode);
                if (!/^\d+$/.test(keyValue)) {
                  e.preventDefault();
                }
              }}
            />
            <div className="">
              <input
               ref={input4Ref}
                className="w-60 h-12 py-2 px-2 pr-5 text-right rounded-md mx-2 text-lg bg-grayLine outline-none"
                type="text"
                value={
                  parseFloat(quantityValues[index]) *
                    parseFloat(priceValues[index]) || ""
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addRow(index);
                    handleKeyPress(e, input1Ref[index])
                  }
                  const keyCode = e.which || e.keyCode;
                  const keyValue = String.fromCharCode(keyCode);
                  if (!/^\d+$/.test(keyValue)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* the save aler method */}
      {
        showSaveM 
        &&
        <SaveTheFator
         showSaveM={showSaveM}
         setShowSaveM= {setShowSaveM}
         setEmptyAll = {setEmptyAll}
         EmployeeData= {EmployeeData}
         />

      }
    </>
  );
};

export default List;