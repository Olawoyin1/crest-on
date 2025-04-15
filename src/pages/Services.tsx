
const services = [
  {
    name: "Commercial and Strategic Asset Management",
    description: "Maximize the value and efficiency of your commercial assets with our expert management services. We offer tailored strategies that ensure sustained growth and increased returns in the competitive real estate market. Let us handle the complexities while you enjoy seamless management.",
    imageUrl: "https://images.unsplash.com/photo-1531835551805-16d864c8d311", 
  },
  {
    name: "Residential Asset Management",
    description: "We help you optimize your residential properties, ensuring maximum returns and tenant satisfaction. With our focused management, we take care of every detail, from maintenance to tenant relations, ensuring a smooth experience for both owners and residents.",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", 
  },
  {
    name: "Network Estate Management",
    description: "Comprehensive management for your network of estates, focusing on efficiency and long-term growth. Our services span across multiple properties, ensuring that each estate is properly maintained and that operations are optimized for maximum profitability.",
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83", 
  },
  {
    name: "Property Investment Advisory",
    description: "Guiding your investment decisions with in-depth market analysis and expert insights. We provide detailed recommendations on where to invest, considering the latest trends and potential returns. Trust us to help you build a lucrative property portfolio.",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", 
  },
  {
    name: "Property Leasing and Tenant Management",
    description: "Ensure a smooth leasing process and efficient tenant management for your properties. Our services cover everything from finding tenants to handling rent collection and maintenance requests, creating a stress-free experience for both landlords and tenants.",
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83", 
  },
  {
    name: "Facility Management and Maintenance",
    description: "Comprehensive services to maintain and manage your property, ensuring a seamless experience. Our team provides regular maintenance, emergency repairs, and management of all facilities, allowing you to focus on your core business without worrying about property issues.",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", 
  },
];

const Services = () => {
  return (
    <div className="py-20">

    <div className="container mx-auto ">
      <h2 className="text-3xl font-bold text-center headings mb-1">Our Services</h2>
      <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Explore the wide range of real estate services we offer to help you at every stage of your journey.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col border border-blue-200 p-2 items-center bg-white rounded-lg overflow-hidden"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-48 object-cover  rounded-md shadow"
            />
            <div className="p-2 flex gap-2 flex-col ">
              <h3 className="font-bold headings text-md text-blue-900">{service.name}</h3>
              <p className="text-gray-600  max-h-24 overflow-hidden text-ellipsis">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
  );
};

export default Services;
