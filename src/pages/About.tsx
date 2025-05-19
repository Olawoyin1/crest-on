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





import { Users, Lightbulb, CheckCircle, Globe2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Get to Know Crest Homes</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Crest Homes is a forward-thinking real estate agency committed to making your journey to homeownership seamless, inspiring, and rewarding. We’re not just about transactions—we’re about transformation. Whether you're buying your first home, upgrading your lifestyle, or investing in your future, we’re your trusted guide at every step.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300">
          <Users className="text-blue-600 w-8 h-8 mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-blue-800">People-First Approach</h3>
          <p className="text-gray-600">
            At Crest Homes, our mission begins and ends with people. We take time to understand your unique needs and tailor every interaction to deliver a supportive, pressure-free experience that reflects your goals and values.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300">
          <Lightbulb className="text-yellow-500 w-8 h-8 mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-blue-800">Smart & Modern Tools</h3>
          <p className="text-gray-600">
            We invest in cutting-edge technology so you don’t have to. From AI-powered search tools to instant virtual tours and data-backed recommendations, we equip you with everything you need to make confident, informed choices.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300">
          <CheckCircle className="text-green-500 w-8 h-8 mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-blue-800">End-to-End Guidance</h3>
          <p className="text-gray-600">
            Buying or selling a home is a journey. We walk with you from your first showing through negotiations, inspections, financing, and closing. Our holistic support model ensures you’re never left guessing or overwhelmed.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300">
          <Globe2 className="text-indigo-500 w-8 h-8 mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-blue-800">Global Reach, Local Feel</h3>
          <p className="text-gray-600">
            Crest Homes combines the intimacy of local expertise with the strength of national partnerships. Our agents understand neighborhood nuances and community charm, helping you find a place that’s more than just a property—it’s a lifestyle.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300">
          <h3 className="font-semibold text-xl mb-2 text-blue-800">Sustainability & Responsibility</h3>
          <p className="text-gray-600">
            We're committed to more than real estate—we're committed to responsible growth. Crest Homes integrates eco-conscious practices into our listings, supports green-certified homes, and actively engages in community betterment initiatives.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300">
          <h3 className="font-semibold text-xl mb-2 text-blue-800">Transparency at Every Step</h3>
          <p className="text-gray-600">
            Honesty and openness are at the heart of everything we do. We provide clear timelines, cost breakdowns, and real expectations, helping you make decisions with confidence and clarity.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h4 className="text-2xl font-bold text-blue-900 mb-4">Let’s make your next move unforgettable</h4>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Contact Crest Homes today to explore how we can help you buy, sell, or invest in real estate with confidence, clarity, and care. Your future home is waiting—and we’re here to guide you there.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
