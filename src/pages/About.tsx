import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import WhyUs from '../components/WhyUs';

const faqs = [
    {
      question: 'What services does Crest Homes offer?',
      answer: 'We provide comprehensive real estate solutions including property sales, lettings, asset management, and consultancy tailored for the UK market.'
    },
    {
      question: 'Is Crest Homes a trusted company?',
      answer: 'Yes, Crest Homes has been a trusted name in the UK property market since 2011, serving buyers, sellers, landlords, and tenants.'
    },
    {
      question: 'Where is Crest Homes based?',
      answer: 'Our main office is located in London, UK, and we serve clients across all regions of the United Kingdom.'
    },
    {
      question: 'Do you offer property valuation services?',
      answer: 'Yes, we offer professional property valuation services to help clients determine accurate market value before buying, selling, or renting.'
    },
    {
      question: 'What makes Crest Homes different from other agencies?',
      answer: 'Our commitment to personalised service, deep market knowledge, and a decade of trust sets us apart. We focus on long-term relationships, not just transactions.'
    }
  ];
  

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <Navbar />
        
        <div className="container py-10 mx-auto">
            <div className="md:flex gap-10">
                <div className="flex-1/3 flex-shrink-0">
                    <img src="../../Images/crestt.jpeg"  className="object-cover w-full h-fit md:object-contain" alt="" />
                </div>
                <div className="flex flex-col flex-2/3 gap-3 mt-10 md:mt-0">
                    <h3 className="font-extrabold text-3xl headings"><span className="text-blue-900">CREST HOMES</span> <br />Where Property Meets Possibility</h3>

                    <p className="text-gray-500">Founded in 2011, Crest Homes is a trusted name in the UK property market, dedicated to helping individuals and families find their perfect homes and investment properties. With over a decade of experience, we specialize in residential, commercial, and strategic property management, offering tailored solutions that meet the diverse needs of our clients. <br /> <br />

                    Our mission is simple: to make property finding and management effortless, transparent, and personalized. Whether you’re a first-time buyer, seasoned investor, or a family searching for your dream home, Crest Homes provides expert guidance and support at every step of your property journey. <br /> <br />

                    We combine deep market insights with cutting-edge technology to deliver a seamless experience — from smart property search tools to insightful analytics and dedicated customer service.</p>
                </div>
            </div>
    
        </div>

        <WhyUs />


        <div className="container py-13">
            {/* FAQ Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
           
           <div>
           <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
           <div className="space-y-4">
               {faqs.map((faq, index) => (
               <div key={index}>
                   <button
                   onClick={() => toggleAccordion(index)}
                   className="w-full text-sm text-left flex items-center justify-between px-4 py-3  font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-200 hover:text-gray-900 transition"
                   >
                   {faq.question}
                   <ChevronDownIcon
                       className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                   />
                   </button>
                   <div
                   className={`overflow-hidden transition-all duration-300 px-4 ${
                       openIndex === index ? 'max-h-40 py-3' : 'max-h-0'
                   }`}
                   >
                   <p className="text-gray-600 text-base">{faq.answer}</p>
                   </div>
               </div>
               ))}
           </div>
           </div>

           <img
           src="../../Images/crest.jpeg"
           alt="FAQ"
           className="object-cover w-full h-100"
           />
       </div>
        </div>
    </div>
  );
}
