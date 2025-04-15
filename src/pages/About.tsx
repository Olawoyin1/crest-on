// import { useState } from 'react';
// import { ChevronDownIcon } from 'lucide-react';

// const faqs = [
//   {
//     question: 'What services does Crest-On offer?',
//     answer: 'We provide comprehensive real estate solutions including property sales, lettings, asset management, and consultancy tailored for the UK market.'
//   },
//   {
//     question: 'Is Crest-On a trusted company?',
//     answer: 'Yes, Crest-On Real Estate has been a trusted name in the UK property market since 2011, serving buyers, sellers, landlords, and tenants.'
//   },
//   {
//     question: 'Where is Crest-On based?',
//     answer: 'Our main office is located in London, UK, and we serve clients across all regions of the United Kingdom.'
//   }
// ];

// export default function About() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto px-4 py-16 space-y-20">
//       {/* About Section */}
//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         <img
//           src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
//           alt="Crest-On Office"
//           className="rounded-2xl shadow-md w-full h-full object-cover"
//         />
//         <div>
//           <h2 className="text-3xl font-bold mb-4">About Crest-On Real Estate</h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Established in 2011, Crest-On Real Estate has become a trusted name in the UK property market. Our mission is to deliver transparent, reliable, and client-focused services that simplify property buying, selling, and management for everyone.
//           </p>
//           <p className="text-gray-700 text-lg mt-4">
//             Whether you're a first-time buyer, seasoned investor, landlord, or tenant, Crest-On is here to guide you every step of the way.
//           </p>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index}>
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full text-left flex items-center justify-between px-4 py-3 text-lg font-medium bg-gray-100 rounded-xl hover:bg-gray-200 transition"
//                 >
//                   {faq.question}
//                   <ChevronDownIcon
//                     className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 px-4 ${
//                     openIndex === index ? 'max-h-40 py-3' : 'max-h-0'
//                   }`}
//                 >
//                   <p className="text-gray-600 text-base">{faq.answer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1600607682043-1e03c1f5a56c"
//           alt="FAQ"
//           className="rounded-2xl shadow-md w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }
