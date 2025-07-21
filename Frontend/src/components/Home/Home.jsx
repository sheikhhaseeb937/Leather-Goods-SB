import React from 'react'

import ZoomCard from '../ZoomCard/ZoomCard'

import TopsallerProduct from '../Top saller/TopsallerProduct'

import LeatherSection from './Info'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div className='border-'>
      <ZoomCard/>
      <TopsallerProduct/>
  <LeatherSection/>
  <Footer/>


    </div>
  )
}

export default Home
