const steps = [
  {
    number: 1,
    title: "Discover Your Dream Home",
    description:
      "Start your journey by browsing our curated selection of homes. Whether you're looking for a cozy apartment, a spacious family house, or a luxurious estate, our listings are updated daily to match a wide range of styles, budgets, and locations. Use our smart filters to refine your search and save your favorites for later.",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: 2,
    title: "Schedule a Viewing",
    description:
      "Once you've found properties that catch your eye, easily schedule a private or virtual viewing directly from our platform. Choose a time that works for you and let our team coordinate the rest. We ensure a smooth and flexible experience tailored to your availability.",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: 3,
    title: "Connect with a Local Agent",
    description:
      "Our experienced and friendly real estate agents are ready to guide you through the entire process. They'll answer your questions, provide neighborhood insights, and give expert advice to help you make an informed decision. With Crest Homes, you're never on your own.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: 4,
    title: "Get Financing Assistance",
    description:
      "Need help with financing? We work with a network of trusted lenders to offer you competitive mortgage options tailored to your financial goals. From pre-approval to loan closing, we simplify the process and connect you with the best professionals in the industry.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: 5,
    title: "Make an Offer with Confidence",
    description:
      "When you’re ready to move forward, our agents will help you prepare and submit a compelling offer. We’ll negotiate on your behalf to ensure you get the best deal, while keeping the process transparent, stress-free, and aligned with your interests.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    number: 6,
    title: "Close the Deal Smoothly",
    description:
      "From paperwork to inspections and final approvals, we guide you through each step of closing. Our team works closely with attorneys, title agents, and financial partners to ensure everything is handled professionally and on time. No surprises—just results.",
    image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: 7,
    title: "Move Into Your New Home",
    description:
      "Congratulations! After closing, we’ll help you transition into your new space with helpful move-in checklists, utility setup guidance, and post-move support. At Crest Homes, our relationship doesn’t end at the sale—it’s just the beginning of your next chapter.",
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];


const CrestHomesTimeline = () => {
  return (
    <section className="py-10 ">
      <div className="mx-auto ">
       

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 z-0" />

          {/* Steps */}
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`mb-10 flex flex-col md:flex-row items-center justify-between relative z-10 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 md:px-6 mb-6 md:mb-0">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded shadow w-full md:h-80 object-cover"
                />
              </div>

              {/* Number Badge */}
              <div className="absolute hidden  left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full md:flex items-center justify-center font-semibold shadow z-20">
                {step.number}
              </div>

              {/* Content */}
              <div className="md:w-1/2 md:px-6 bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrestHomesTimeline;
