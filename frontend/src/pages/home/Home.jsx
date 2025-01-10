import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'
import Swiper from './swiper';

const Home = () => {
  return (
    <div>
      <Banner/>
      <TopSellers/>
      <Recommended/>
      <News/>
      <Swiper/>
    </div>
  )
}

export default Home
