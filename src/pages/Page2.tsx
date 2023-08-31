import React from 'react'
import { style } from '../assets/style/styles'
import HeaderSell from '../components/HeaderSell/HeaderSell'
import { BodyBuy } from '../components/BodyBuy/BodyBuy'
import BodySell from '../components/BodySell/BodySell'
import { useState } from 'react'
import FooterSell from '../components/FooterSell/FooterSell'
const Page2 = () => {
  const [pageNext, setPageNext] = useState(false);
  return (
    <>
      <div className={`p-5 w-full  ${style.col} items-center justify-center`}>
        <div className={`shadow-xl rounded-xl w-full py-5 px-2`}>
          <HeaderSell />
          <BodySell pageNext={pageNext} setPageNext={setPageNext}  />
          <FooterSell pageNext={pageNext} setPageNext={setPageNext} />
        </div>
      </div>
    </>
  )
}

export default Page2