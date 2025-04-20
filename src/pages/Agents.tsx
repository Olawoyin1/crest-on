import { Mail, Phone } from 'lucide-react';
// import Navbar from '../components/Navbar';

// Sample data for agents
const agents = [
  {
    
    id: 3,
    name: "Olivia Martinez",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    specialization: "Residential Properties",
    email: "olivia.m@creston.com",
    phone: "+1 (555) 456-7890",
    bio: "Olivia is passionate about helping families find their dream homes. She's dedicated to making the buying process stress-free."
  },
  {
    id: 4,
    name: "David Thompson",
    image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    specialization: "Investment Properties",
    email: "david.t@creston.com",
    phone: "+1 (555) 567-8901",
    bio: "David helps investors make smart real estate decisions. His analytical approach ensures maximum ROI for his clients."
  }
];

const Agents = () => {
  return (
    <>
      <main className="container  py-10">
        <h1 className="text-4xl  font-bold sf mb-6">Our Expert Agents</h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Our team of experienced real estate professionals is here to help you find your perfect property. 
          Whether you're looking to buy, sell, or rent, our agents have the expertise to guide you through every step.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover object-center "
                />
              </div>
              <div className="mt-2">
                <h3 className="text-xl sf font-semibold">{agent.name}</h3>
                <p className="text-primary sf font-medium mb-2">{agent.specialization}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{agent.bio}</p>
              </div>
              <div className="flex mt-2 flex-col items-start gap-2">
                <button className="w-full bg-gray-900 text-white  p-1 cursor-pointer text-sm border-0  flex justify-center sf items-center gap-2">
                  <Phone size={16} />
                  <span>{agent.phone}</span>
                </button>
                <button className="w-full sf  p-1 cursor-pointer text-sm border-0 bg-blue-900 text-white flex justify-center items-center gap-2">
                  <Mail size={16} />
                  <span>Contact Agent</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Agents;
