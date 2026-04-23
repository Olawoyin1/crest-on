
const services = [
  {
    name: "Property Management",
    description: "We take the stress out of managing your property. From day-to-day operations to long-term strategy, our team handles everything so you can enjoy the returns without the hassle.",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    name: "Viewings and Sourcing",
    description: "We source the right properties and arrange viewings tailored to your needs. Whether you're a buyer, investor, or tenant, we match you with the best options on the market.",
    imageUrl: "https://images.unsplash.com/photo-1531835551805-16d864c8d311",
  },
  {
    name: "Tenant Find and Management",
    description: "We find reliable, vetted tenants for your property and manage the entire relationship — from referencing and contracts to ongoing communication and renewals.",
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
  },
  {
    name: "Property Repairs and Renovations",
    description: "Our trusted network of contractors handles everything from minor repairs to full renovations. We ensure quality workmanship, fair pricing, and minimal disruption to your tenants.",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
];

const Services = () => {
  return (
    <div className="py-10">

    <div className="container mx-auto ">
      <h2 className="text-3xl font-bold  mb-1">Our Services</h2>
      <p className="text-gray-600  mb-10  mx-auto">
          Explore the wide range of real estate services we offer to help you at every stage of your journey.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-48 object-cover  "
            />
            <div className="mt-3  flex gap-2 flex-col ">
              <h3 className="font-bold headings text-md text-blue-900">{service.name}</h3>
              <p className="text-gray-600   overflow-hidden text-ellipsis">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
  );
};

export default Services;
