// import { useState } from 'react';
// import { ChevronDownIcon } from 'lucide-react';
// import WhyUs from '../components/WhyUs';

// const faqs = [
//     {
//       question: 'What services does Crest Homes offer?',
//       answer: 'We provide comprehensive real estate solutions including property sales, lettings, asset management, and consultancy tailored for the UK market.'
//     },
//     {
//       question: 'Is Crest Homes a trusted company?',
//       answer: 'Yes, Crest Homes has been a trusted name in the UK property market since 2011, serving buyers, sellers, landlords, and tenants.'
//     },
//     {
//       question: 'Where is Crest Homes based?',
//       answer: 'Our main office is located in London, UK, and we serve clients across all regions of the United Kingdom.'
//     },
//     {
//       question: 'Do you offer property valuation services?',
//       answer: 'Yes, we offer professional property valuation services to help clients determine accurate market value before buying, selling, or renting.'
//     },
//     {
//       question: 'What makes Crest Homes different from other agencies?',
//       answer: 'Our commitment to personalised service, deep market knowledge, and a decade of trust sets us apart. We focus on long-term relationships, not just transactions.'
//     }
//   ];
  

// export default function About() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className='mt-20'>
        
//         <div className="container py-10 mx-auto">
//             <div className="md:flex gap-10">
//                 <div className="flex-2/5 flex-shrink-0">
//                     <img src="../../Images/crestt.jpeg"  className="object-cover w-full h-100" alt="" />
//                 </div>
//                 <div className="flex flex-col flex-3/5 gap-3 mt-10 md:mt-0">
//                     <h3 className="font-extrabold text-3xl headings"><span className="text-blue-900">CREST HOMES</span> <br />Where Property Meets Possibility</h3>

//                     <p className="text-gray-500">Founded in 2011, Crest Homes is a trusted name in the UK property market, dedicated to helping individuals and families find their perfect homes and investment properties. With over a decade of experience, we specialize in residential, commercial, and strategic property management, offering tailored solutions that meet the diverse needs of our clients. <br /> <br />

//                     Our mission is simple: to make property finding and management effortless, transparent, and personalized. Whether you’re a first-time buyer, seasoned investor, or a family searching for your dream home, Crest Homes provides expert guidance and support at every step of your property journey. <br /> <br />

//                     We combine deep market insights with cutting-edge technology to deliver a seamless experience — from smart property search tools to insightful analytics and dedicated customer service.</p>
//                 </div>
//             </div>
    
//         </div>

//         <WhyUs />


//         <div className="container py-13">
//             {/* FAQ Section */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">
           
//            <div>
//            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
//            <div className="space-y-4">
//                {faqs.map((faq, index) => (
//                <div key={index}>
//                    <button
//                    onClick={() => toggleAccordion(index)}
//                    className="w-full text-sm text-left flex items-center justify-between px-4 py-3  font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-200 hover:text-gray-900 transition"
//                    >
//                    {faq.question}
//                    <ChevronDownIcon
//                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
//                    />
//                    </button>
//                    <div
//                    className={`overflow-hidden transition-all duration-300 px-4 ${
//                        openIndex === index ? 'max-h-40 py-3' : 'max-h-0'
//                    }`}
//                    >
//                    <p className="text-gray-600 text-base">{faq.answer}</p>
//                    </div>
//                </div>
//                ))}
//            </div>
//            </div>

//            <img
//            src="../../Images/crest.jpeg"
//            alt="FAQ"
//            className="object-cover w-full h-120"
//            />
//        </div>
//         </div>
//     </div>
//   );
// }



import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-900">About Crest Homes</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Your journey to finding or selling the perfect home starts with a team that knows the industry,
          cares deeply about your goals, and delivers every step of the way. That’s what Crest Homes is all about.
        </p>

        {/* Our Story */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Story</h3>
          <p className="text-base leading-7">
            Crest Homes began with a simple idea: to revolutionize how people discover, buy, and sell homes.
            What started as a local agency has grown into a nationally recognized real estate brand known
            for innovation, trust, and excellence. With decades of combined experience in residential sales,
            rentals, and luxury markets, our team is passionate about making your real estate experience exceptional.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h3>
          <p className="text-base leading-7">
            We aim to simplify the real estate process while delivering unmatched personal service.
            At Crest Homes, our mission is to help clients make informed decisions with confidence—whether it’s
            their first home, an investment property, or a dream upgrade. We combine cutting-edge technology with
            human care to create a seamless experience tailored to each unique need.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">What Sets Us Apart</h3>
          <ul className="space-y-4 list-disc pl-5 text-base">
            <li><strong>Local Knowledge, National Reach:</strong> Deep roots in your community backed by national resources.</li>
            <li><strong>Tech-Driven, Human-Touched:</strong> Smart search tools, instant bookings, and real agents by your side.</li>
            <li><strong>Transparency & Trust:</strong> No hidden fees, honest advice, and complete transparency throughout.</li>
            <li><strong>End-to-End Service:</strong> From discovery to closing—and even move-in support—we’re with you all the way.</li>
          </ul>
        </div>

        {/* Our Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-700 mb-2">Integrity</h4>
              <p>We build trust through honesty, transparency, and ethical practices.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-700 mb-2">Innovation</h4>
              <p>We continuously embrace modern tools and ideas to improve our client experience.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-700 mb-2">Client-First Approach</h4>
              <p>Our priority is to make sure every decision benefits our clients’ long-term goals.</p>
            </div>
          </div>
        </div>

        {/* Testimonials or Trust Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">Trusted by Thousands</h3>
          <p className="text-base mb-6">
            With over 10,000 successful transactions and a 98% client satisfaction rate, Crest Homes is trusted by
            families, investors, and first-time buyers alike. Our reputation is built on results and lasting relationships.
          </p>
          <div className="flex gap-6 flex-wrap">
            <div className="bg-blue-100 rounded-lg p-4 w-full sm:w-[48%]">
              <p className="italic">“Crest Homes made our home search stress-free and even fun! Highly recommend.”</p>
              <span className="block mt-2 font-medium">— Sarah & James, London</span>
            </div>
            <div className="bg-blue-100 rounded-lg p-4 w-full sm:w-[48%]">
              <p className="italic">“They helped me sell quickly and above asking. Best service I’ve received in real estate.”</p>
              <span className="block mt-2 font-medium">— Ali, Birmingham</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold mb-2 text-blue-900">Ready to start your journey?</h4>
          <p className="text-base mb-4">Explore homes, connect with an agent, or schedule your first viewing today.</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
