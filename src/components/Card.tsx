
const Card: React.FC = () => {
  return (
    <div className="w-full ">

    <div className="bg-gray-900 text-white">

    <div className="flex flex-col md:flex-row md:items-center justify-between  py-10  gap-6 md:gap-0 container mx-auto">
      {/* Left Content */}
      <div className=" md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Thinking of selling or letting your property?
        </h2>
        <p className=" text-base md:text-lg">
          Let Crest Homes provide you with a free, no-obligation property valuation by our local experts.
        </p>
      </div>

      {/* Right Button */}
      <div className="mt-4 md:mt-0">
        <button className="bg-blue-600 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-blue-700 transition">
          Book A Valuation
        </button>
      </div>

    </div>
    </div>


      
    {/* Stats Section */}
      <div className="grid py-7 grid-cols-1 sm:grid-cols-3 gap-6 container mx-auto text-center">
        <div>
          <h3 className="text-2xl md:text-6xl font-bold text-blue-600">25+</h3>
          <p className="text-gray-700">Years of Excellence</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-6xl font-bold text-blue-600">1,200+</h3>
          <p className="text-gray-700">Properties Sold</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-6xl font-bold text-blue-600">98%</h3>
          <p className="text-gray-700">Client Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
