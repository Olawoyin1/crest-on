
const Hero: React.FC = () => {

 

  return (
    <section className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="../../Images/chv.mp4" // Replace with your actual path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
        <h1 className="text-white text-2xl md:text-6xl max-w-4xl font-bold leading-tight">
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
