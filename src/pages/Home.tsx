// import React from 'react'
import FeaturedProperties from '../components/FeaturedProperties'
import Hero from '../components/Hero'
import SearchComponent from '../components/SearchComponent'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <div>
        <Hero />
        <div className="container-custom ">
          <SearchComponent />
        </div>
        <FeaturedProperties />
        <WhyUs />



    </div>
  )
}

export default Home