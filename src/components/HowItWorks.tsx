
import CrestHomesTimeline from "./CrestHomesTimeline";

const HowItWorks = () => {
  return (
    <div className="mt-20">

        <div className="relative  bg-white overflow-hidden">
        
      <div className="container  ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 s md:pt-16 lg:pt-20  xl:pt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-center lg:text-start cf tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">How does Crest-Home Works ?
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iure praesentium tempora quas sapiente autem tempore nihil rerum vitae nisi.
              </p>
              <div className=" sm:flex sm:justify-center lg:justify-start">
                <div className="flex gap-3">
              <button className="mt-6 px-6 py-3 bg-white border border-gray-200 text-black font-semibold rounded text-sm hover:bg-gray-200 transition">
                Browse Listings
              </button>
              <button className="mt-6 px-6 py-3 bg-blue-900  text-white font-semibold rounded text-sm hover:bg-blue-800 transition">
                Browse Listings
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Person browsing products on a smartphone"
        />
      </div>
    </div>



      <div className="container">
        

        <CrestHomesTimeline />
      </div>
    </div>
  );
};

export default HowItWorks;
