// import React from 'react'
import { useEffect } from 'react'
import FeaturedProperties from '../components/FeaturedProperties'
import Hero from '../components/Hero'
import SearchComponent from '../components/SearchComponent'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'
import { toast } from 'sonner'
import Services from './Services'

const Home = () => {
  // useEffect(() => {
  //   toast('🏡 Welcome to Crest-On', {
  //     id: 'home-toast',
  //     description: 'Find your dream home with us today.',
  //     duration: 4000,
  //   });

    
  // }, []);


  useEffect(() => {
    // Only show the toast once per page load
    const alreadyShown = sessionStorage.getItem("welcomeToastShown");


    if (!alreadyShown) {
      toast('🏡 Welcome to Crest-On', {
        id: 'home-toast',
        description: 'Find your dream home with us today.',
        duration: 4000,
      });
      sessionStorage.setItem("welcomeToastShown", "true");
    }
  }, []);

  return (
    <div>
        <Hero />
        <div className="container-custom px-7">
          <SearchComponent />
        </div>
        <FeaturedProperties />
        <WhyUs />
        <Services />
        <Testimonials />



    </div>
  )
}

export default Home