// import React from 'react'
import { useEffect } from 'react'
// import FeaturedProperties from '../components/FeaturedProperties'
import Hero from '../components/Hero'
// import SearchComponent from '../components/SearchComponent'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'
import { toast } from 'sonner'
import Services from './Services'
import Intro from '../components/Intro'

const Home = () => {

  useEffect(() => {
    const isPageRefresh = window.performance?.navigation?.type === 1;

    const alreadyShown = sessionStorage.getItem("welcomeToastShown");

    if (isPageRefresh) {
      toast('🏡 Welcome to Crest-On', {
        id: 'home-toast',
        description: 'Find your dream home with us today.',
        duration: 4000,
      });
      sessionStorage.setItem("welcomeToastShown", "true");
    }

    console.log("isPageRefresh:", isPageRefresh, "alreadyShown:", alreadyShown);
  }, []);


  return (
    <div>
        <Hero />
        {/* <div className="container-custom px-7">
          <SearchComponent />
        </div> */}
        <Intro />
        {/* <FeaturedProperties /> */}
        <WhyUs />
        <Services />
        <Testimonials />



    </div>
  )
}

export default Home