// import React from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import { ArrowRight } from 'lucide-react';


const Hero = () => {
  return (
    <section
      className="h-[85vh] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("")',
      }}
    >
        <Navbar />
      <div className="container h-full mx-auto">
        <div className=" h-full flex items-center">
          <div className="max-w-2xl mx-auto -mt-30 flex flex-col gap-3 text-center">
            <p className="border border-b-cyan-400 rounded-4xl w-fit mx-auto px-4 py-2 headings ">LET US GUIDE YOUR HOME</p>
            <h1 className="text-5xl md:text-6xl font-extrabold">
              Find your dream property with Crest-On
            </h1>
            <p className="text-sm text-gray-900">
              We connect you to the finest properties in the most sought-after
              locations. Your perfect home is just a few clicks away.
            </p>
            <button className="w-fit bg-[#1f4b43] text-white flex mx-auto cursor-pointer">
                <Link to="/listings" className="flex items-center text-sm gap-3 border border-blue-950 p-2 px-7">
                    <span>Browse Listings</span>
                    <ArrowRight size={18} />
                </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
