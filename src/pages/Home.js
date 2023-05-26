import React from 'react'
import Hero from '../component/Hero'
import CryptoInvolvement from '../component/CryptoInvolvement'
import BuyandSell from '../component/BuyandSell'
import Create from '../component/Create'
import Crypto from '../component/Crypto'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Crypto></Crypto>
      <CryptoInvolvement/>
      <BuyandSell/>
    </div>
  )
}

export default Home