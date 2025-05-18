// components/Loader.tsx
import { Home } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-3 animate-fade-in">
        {/* Spinning Icon */}
        <div className="animate-spin">
          <Home className="w-12 h-12 text-gray-800" />
        </div>

        {/* Pulsing Text */}
        <h1 className="text-xl font-semibold text-gray-700 animate-pulse">
          Crest-Homes
        </h1>
      </div>
    </div>
  );
};

export default Loader;
