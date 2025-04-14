// import React from 'react'
import { useEffect } from 'react'
import FeaturedProperties from '../components/FeaturedProperties'
import Hero from '../components/Hero'
import SearchComponent from '../components/SearchComponent'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'
import { toast } from 'sonner'

const Home = () => {
  useEffect(() => {
    toast('🏡 Welcome to Crest-On', {
      id: 'home-toast',
      description: 'Find your dream home with us today.',
      duration: 4000,
    });

    
  }, []);

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