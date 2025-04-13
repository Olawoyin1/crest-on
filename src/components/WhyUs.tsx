import React from "react";
import {  FaUserTie, FaBuilding, FaThumbsUp } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";

const reasons = [
  {
    title: "Find Your Future Home",
    description: "Browse thousands of listings to find a place that feels just right.",
    icon: <HiOutlineHomeModern className=" text-3xl mx-auto" />
  },
  {
    title: "Experienced Agents",
    description: "Work with knowledgeable agents who understand your needs.",
    icon: <FaUserTie className=" text-3xl mx-auto" />,
  },
  {
    title: "Buy or Rent with Ease",
    description: "We simplify the process of buying or renting your next property.",
    icon: <FaBuilding className="text-3xl mx-auto" />,
  },
  {
    title: "Trusted by Thousands",
    description: "Join a community that trusts Crest-On to find the right place.",
    icon: <FaThumbsUp className="text-3xl mx-auto" />,
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          Why You Should Work With Us
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Discover the reasons thousands of clients trust Crest-On to guide their property journey.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div key={index} className="text-center">
              {item.icon}
              <h3 className="mt-4 font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
