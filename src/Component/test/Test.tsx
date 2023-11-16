import axios from 'axios';
import React from 'react'

const Test = () => {
  const jwt = localStorage.getItem('jwt')
  const EmployeeData = {
    "invoice_num": 5,
    "contact": "The final test",
    "date": "1402,1,3",
    "buy": "buy",
    "remaining": 0,
    "total_amount": 867,
    "discount": 0,
    "taxes": 0,
    "payable_amount": 0,
    "invoice_items": [
        {
            "title": "The final test",
            "amount": 100.00,
            "price": 3433
        }
    ]
}
  const handelSaveMethod = async () => {
        try {
          const token = jwt;
          const res = await axios({
            method: "post",
            url: `https://lajward-mis.dev:8005/invoices`,
            headers: { Authorization: `Bearer ${token}` },
            data: EmployeeData,
          });
          
          if (res.status === 200) {
            console.log(res.data);
            
        } else {
          alert("The request was not successful.");
        }
      } catch (error) {
      }
  }
  // the get data
    const getData = async () => {
    const token = jwt;
    try {
      const response = await axios.get(`https://lajward-mis.dev:8005/invoices`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if ((response.status = 200)) {
        console.log(response.data);
        
      } else {
        alert("مشکلی در دریفات دیتا پیش آمده لطه صفخه را دوباره باز کنید");
      }
    } catch (error) {
      alert("مشکلی در دریاف اطلاعات وجود دراد ");
      // style(false);
    }
  }
  return (

    <div className="flex flex-row justify-center items-center">
      <button onClick={()=>handelSaveMethod()} className='bg-btn py-2 px-4 rounded-md text-white mt-5'>Post the data</button>
      <button onClick={()=>getData()} className='bg-btn py-2 px-4 rounded-md text-white mt-5'>Get the data</button>
   </div>
  )
}

export default Test