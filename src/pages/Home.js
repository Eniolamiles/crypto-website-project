import React from 'react'
import Hero from '../component/Hero'
import CryptoInvolvement from '../component/CryptoInvolvement'
import BuyandSell from '../component/BuyandSell'
import Crypto from '../component/Crypto'
import Create from '../component/Create'
import Review from '../component/Review'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Crypto></Crypto>
      <CryptoInvolvement/>
      <BuyandSell/>
      <Create/>
      <Review/>
      <Contact/>
    </div>
  )
}

export default Home