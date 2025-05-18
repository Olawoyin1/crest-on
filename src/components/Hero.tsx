
// // import { Link } from "react-router";
// // import Navbar from "./Navbar";
// // import { ArrowRight } from 'lucide-react';
// // https://img.freepik.com/free-vector/modern-3d-city-background_52683-30328.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740")
// // https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740

// // https://img.freepik.com/premium-photo/white-paper-skyscrapers_393518-349.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740

// // const Hero = () => {
// //   return (
// //     <section
// //       className="h-[85vh] bg-cover bg-center"
// //       style={{
// //         backgroundImage:
// //           'url("https://img.freepik.com/free-vector/modern-3d-city-background_52683-30328.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740")'
// //       }}
// //     >
// //         <Navbar />
// //       <div className="container h-full mx-auto">
// //         <div className=" h-full flex items-center">
// //           <div className="max-w-3xl mx-auto -mt-30 flex flex-col gap-3 text-center">
// //             <p className="border border-blue-400 rounded-4xl w-fit mx-auto px-4 py-2 font-medium headings ">LET US GUIDE YOUR HOME</p>
// //             <h1 className="text-5xl md:text-6xl font-extrabold">
// //               Find your dream property with Crest Homes
// //             </h1>
// //             <p className="text-sm text-gray-900">
// //               We connect you to the finest properties in the most sought-after
// //               locations. Your perfect home is just a few clicks away.
// //             </p>
// //             <button className="w-fit bg-blue-800 border-0 text-white flex mx-auto cursor-pointer">
// //                 <Link to="/listings" className="flex items-center text-sm gap-3  p-2 px-7">
// //                     <span>Browse Listings</span>
// //                     <ArrowRight size={18} />
// //                 </Link>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;




// // ================ HERO VERSION 1 ===============// 

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Navbar from "./Navbar";

// const slides = [
//   {
//     image: "https://img.freepik.com/free-photo/large-modern-office-building_1127-3073.jpg?ga=GA1.1.1092135121.1738813692&w=740",
//     text: "Commercial & Strategic Asset Management",
//   },
//   {
//     image: "https://img.freepik.com/premium-photo/landscape-blurry-building-city-background_87720-30456.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "Residential Asset Management",
//   },
//   {
//     image: "https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?ga=GA1.1.1092135121.1738813692&semt=ais_hybrid&w=740",
//     text: "Network Estate Management",
//   },
//   {
//     image: "https://img.freepik.com/premium-photo/front-yard-bliss-look-average-residential-house-with-concrete-pathway_1034537-126986.jpg?ga=GA1.1.1092135121.1738813692&w=740",
//     text: "Property Investment Advisory",
//   },
//   {
//     image: "https://img.freepik.com/premium-photo/no-humans-tree-outdoors-sky-cloud-scenery-day-grass-building-house-blue-sky-window-cloudy-sky_943272-2229.jpg?ga=GA1.1.1092135121.1738813692&w=740",
//     text: "Property Leasing & Tenant Management",
//   },
//   {
//     image: "https://img.freepik.com/free-photo/way-white-house_1162-117.jpg?ga=GA1.1.1092135121.1738813692&w=740",
//     text: "Facility Management & Maintenance",
//   },
// ];

// function Hero() {
//     const settings = {
//         dots: false,
//         fade: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 6000,
//         pauseOnHover: false,
//       };

//   return (
//     <div className="relative w-full min-h-screen">
//       {/* Navbar on top */}
//       <div className="absolute top-0 left-0 w-full z-10">
//         <Navbar />
//       </div>

//       {/* Fullscreen slider below */}
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative cf main cursor-grab min-h-screen">
//             <img
//               src={slide.image}
//               alt={slide.text}
//               className="w-full h-screen object-cover"
//             />
//             <div className="absolute inset-0 bg-black/55 flex items-center justify-center z-10">
//               <h2 className="text-white  max-w-xl text-3xl md:text-5xl font-bold text-center px-4">
//                 {slide.text}
//               </h2>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Hero;



const Hero: React.FC = () => {

 

  return (
    <section className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="../../Images/cresthome.mp4" // Replace with your actual path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl max-w-4xl font-bold leading-tight">
          Find Your Perfect Home with Crest Homes
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl">
          Discover premium properties designed for comfort, elegance, and lasting value. Whether you're buying, selling, or investing, Crest Homes is your trusted partner in real estate.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded text-sm hover:bg-gray-200 transition">
          Browse Listings
        </button>
      </div>
      
    </section>
  );
};

export default Hero;
