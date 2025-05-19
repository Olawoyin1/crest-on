import React from "react";
import {
  CheckCircle,
  Award,
  Users,
  Clock,
  Building,
  Shield,
} from "lucide-react";
// import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  // const featuredAgents = agents.slice(0, 3); // Adjust as needed

  return (
    <div className="mt-20">
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-center mb-1">About Crest Homes</h1>
        <p>
          Elevating the real estate experience with expertise, integrity, and
          personalized service since 2011.
        </p>
      </div>

      <div>
        {/* Mission & Vision */}
        <section className="bg-white">
          <div className="container flex flex-col md:flex-row gap-12 items-center">
            <div className="relative flex-1/3">
              <img
                src="../../Images/crest.jpeg"
                alt="Crest Homes Team"
                className="rounded h-[490px] shadow"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-primary-700 font-semibold">Established</p>
                <p className="text-3xl font-bold text-secondary-500">2011</p>
              </div>
            </div>
            <div className="flex-2/3">
              <h2 className="text-3xl  font-semibold mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Crest Homes, our mission is to provide exceptional real
                estate services that exceed our clients' expectations. We strive
                to build lasting relationships based on trust, integrity, and
                results.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our vision is to be the most trusted and respected real estate
                agency, known for our expertise, personalized service, and
                innovative approach.
              </p>
              <div className="space-y-3">
                {[
                  "Personalized service tailored to each client’s unique needs",
                  "Transparent communication throughout the entire process",
                  "Innovative marketing strategies to showcase properties",
                  "Continuous education to stay ahead of market trends",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* Core Values */}
        <section className="py-10 bg-beige-300">
          <div className="container">
            <div className="text-center py-10">
              <h1 className="text-3xl font-bold text-center mb-1">What Makes Us Different</h1>
              <p>
                Our values are the foundation of our business and guide every
                interaction and decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award />,
                  title: "Excellence",
                  desc: "We strive for excellence in everything we do, from client service to property marketing.",
                },
                {
                  icon: <Shield />,
                  title: "Integrity",
                  desc: "We operate with transparency and always have our clients’ best interests at heart.",
                },
                {
                  icon: <Users />,
                  title: "Collaboration",
                  desc: "We work closely with clients and partners to achieve exceptional results.",
                },
                {
                  icon: <Building />,
                  title: "Innovation",
                  desc: "We embrace technology to streamline the real estate process.",
                },
                {
                  icon: <Clock />,
                  title: "Responsiveness",
                  desc: "Timing is crucial, and our team ensures you never miss an opportunity.",
                },
                {
                  icon: <Award />,
                  title: "Expertise",
                  desc: "Our professionals possess deep market knowledge and ongoing training.",
                },
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-6 rounded border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    {React.cloneElement(val.icon, {
                      className: "w-6 h-6 text-primary-700",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-10 bg-white">
          <div className="container">
            {[
              {
                year: "2011",
                title: "Our Founding",
                desc: "Crest Homes was founded with a vision to transform real estate through personalized service.",
                bg: "bg-primary-700",
                img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                reverse: false,
              },
              {
                year: "2015",
                title: "Expansion & Growth",
                desc: "We expanded across the region, doubling our transactions.",
                bg: "bg-secondary-500",
                img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
                reverse: true,
              },
              {
                year: "2020",
                title: "Digital Innovation",
                desc: "We launched our digital platform with virtual tours and online bookings.",
                bg: "bg-accent-500",
                img: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg",
                reverse: false,
              },
              {
                year: "Today",
                title: "Industry Leaders",
                desc: "Crest Homes is recognized for service, expertise, and innovation.",
                bg: "bg-primary-700",
                img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
                reverse: true,
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row ${
                  step.reverse ? "md:flex-row-reverse" : ""
                } gap-4 mb-7`}
              >
                <div className="md:w-1/3 border border-gray-200 rounded">
                  <div className={`${step.bg} p-6 rounded-lg h-full`}>
                    <span className="text-4xl font-bold font-serif">
                      {step.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">
                      {step.title}
                    </h3>
                    <p className="">{step.desc}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="rounded shadow w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        {/* <section className="py-10 bg-beige-300">
        <div className="container">
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/agents" className="btn btn-primary inline-flex items-center">
              View All Team Members
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section> */}

        {/* Stats */}
        <section className="py-10 bg-gray-800 text-white">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              ["15+", "Years of Experience"],
              ["2,500+", "Properties Sold"],
              ["$1B+", "In Sales Volume"],
              ["98%", "Client Satisfaction"],
            ].map(([num, label], idx) => (
              <div key={idx} className="p-6">
                <div className="text-5xl font-bold mb-2 font-serif">{num}</div>
                <p className="text-gray-200 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        {/* <CallToAction
        title="Ready to Find Your Dream Home?"
        description="Our expert agents are ready to help you navigate the real estate market and find the perfect property for your needs."
        primaryButtonText="View Properties"
        primaryButtonLink="/listings"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      /> */}
      </div>
    </div>
  );
};

export default AboutPage;
