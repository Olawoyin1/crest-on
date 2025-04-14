import React from "react";

interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Property Sales",
    description: "We help you buy and sell properties seamlessly.",
    imageUrl: "https://via.placeholder.com/100", // replace with actual image
  },
  {
    id: 2,
    name: "Property Management",
    description: "Professional management for residential and commercial properties.",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Consultation",
    description: "Expert real estate advice tailored to your needs.",
    imageUrl: "https://via.placeholder.com/100",
  },
];

const Services = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Explore the wide range of real estate services we offer to help you at every stage of your journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition duration-300"
            >
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-20 h-20 object-cover mb-4 rounded-full mx-auto"
              />
              <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
