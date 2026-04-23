import { useEffect } from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import { toast } from 'sonner'
import Services from './Services'
import Intro from '../components/Intro'
import Card from '../components/Card'

const Home = () => {

  useEffect(() => {
    const isPageRefresh = window.performance?.navigation?.type === 1;

    const alreadyShown = sessionStorage.getItem("welcomeToastShown");

    if (isPageRefresh) {
      toast('🏡 Welcome to Crest Home', {
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
        <Card />
        {/* <FeaturedProperties /> */}
        <Services />
        <WhyUs />
        <Intro />
        {/* <Testimonials /> */}



    </div>
  )
}

export default Home