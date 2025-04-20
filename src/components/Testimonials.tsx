// import React from 'react';
// import Slider from 'react-slick';
import Slider from 'react-slick'

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Crest-On helped me find my dream home quickly and easily. The team was super professional and friendly!",
  },
  {
    name: "Michael Lee",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    text: "The agents are very experienced and guided me throughout the buying process. Highly recommend!",
  },
  {
    name: "Chloe Kim",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "A very smooth experience renting my first apartment with Crest-On. Trustworthy and efficient!",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-300/8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sf font-bold text-gray-800 mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-gray-600 mb-6">
              Discover how Crest-On has helped thousands of people find or sell their property with ease and confidence.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-bold text-blue-600">10k+</p>
                <small className="text-gray-500">Happy Clients</small>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">5k+</p>
                <small className="text-gray-500">Properties Sold</small>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div>
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 shadow rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-center italic text-gray-700 mb-2">"{testimonial.text}"</p>
                  <h4 className="text-center sf font-semibold text-gray-800">{testimonial.name}</h4>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



