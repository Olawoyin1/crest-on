
import  { useState } from "react";
import { X } from "lucide-react";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
// import { cn } from "@/lib/utils";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "15551234567"; // Replace with your actual WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 p-4 bg-white rounded-lg shadow-lg w-64 mb-3 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Chat with us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Hi there! Have questions about our properties? Message us on WhatsApp for immediate assistance.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center"
          >
            <AiOutlineMessage size={18} className="mr-2" />
            Start Chat
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 bg-green-900 rounded-full shadow-lg focus:outline-none transition-colors",
          ${isOpen} ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <FiMessageSquare size={24} className="text-white " />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
