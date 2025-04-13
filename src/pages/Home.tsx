// import React from 'react'
import FeaturedProperties from '../components/FeaturedProperties'
import Hero from '../components/Hero'
import SearchComponent from '../components/SearchComponent'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <div>
        <Hero />
        <div className="container-custom px-7">
          <SearchComponent />
        </div>
        <FeaturedProperties />
        <WhyUs />
        <Testimonials />



    </div>
  )
}

export default Home