import CrestHomesTimeline from "./CrestHomesTimeline";

const HowItWorks = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <div className="grid grid-cols-1 min-h-[400px] md:grid-cols-2 gap-7">
          <div className="flex flex-col gap-3 items-start justify-center">
            <h2 className="font-extrabold text-2xl md:text-5xl">
              How does Crest-Home Works ?
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae rem
              quisquam vero repellat provident itaque impedit earum repudiandae
              accusantium aliquid?
            </p>
            <div className="flex gap-3">
              <button className="mt-6 px-6 py-3 bg-white border border-gray-200 text-black font-semibold rounded text-sm hover:bg-gray-200 transition">
                Browse Listings
              </button>
              <button className="mt-6 px-6 py-3 bg-blue-900  text-white font-semibold rounded text-sm hover:bg-blue-800 transition">
                Browse Listings
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
              className="object-cover h-[490px] w-full"
              alt=""
            />
          </div>
        </div>

        <CrestHomesTimeline />
      </div>
    </div>
  );
};

export default HowItWorks;
