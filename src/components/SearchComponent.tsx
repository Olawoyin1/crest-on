
import React, { useState } from 'react';
// import { Search } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [purpose, setPurpose] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/listings', {
      state: { location, priceRange, propertyType, purpose }
    });
  };
  
  return (
    <div className="bg-white shadow-lg rounded-lg py-6 px-4 -mt-14 relative z-10 max-w-5xl mx-auto">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="space-y-1">
          <label htmlFor="location" className="text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Any Location"
            className="w-full placeholder:text-sm h-10 border-0 border-b border-gray-300 px-0 py-2 focus:outline-none "
          />
        </div>
        
        {/* Price Range */}
        <div className="space-y-1">
          <label htmlFor="price" className="text-sm font-medium text-gray-700">
            Price Range
          </label>
          <select
            id="price"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full h-10 text-sm border-0 border-b border-gray-300  px-0 py-2 focus:outline-none"
          >
            <option value="">Any Price</option>
            <option value="0-100000">$0 - $100,000</option>
            <option value="100000-250000">$100,000 - $250,000</option>
            <option value="250000-500000">$250,000 - $500,000</option>
            <option value="500000-1000000">$500,000 - $1,000,000</option>
            <option value="1000000+">$1,000,000+</option>
          </select>
        </div>
        
        {/* Property Type */}
        <div className="space-y-1">
          <label htmlFor="type" className="text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            id="type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full h-10 text-sm border-0 border-b border-gray-300  px-0 py-2 focus:outline-none"
          >
            <option value="">Any Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land</option>
          </select>
        </div>
        
        {/* Buy/Rent */}
        <div className="space-y-1">
          <label htmlFor="purpose" className="text-sm font-medium text-gray-700">
            Purpose
          </label>
          <select
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
             className="w-full h-10 text-sm border-0 border-b border-gray-300  px-0 py-2 focus:outline-none"
          >
            <option value="">Buy or Rent</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        
        {/* Search Button */}
        <div className="flex items-end">
          <button type="submit" className="w-full border bg-blue-800 text-white border-gray-300 text-sm hover:bg-cyan-950 hover:text-white transition cursor-pointer h-10 bg-primary hover:bg-primary/90 flex justify-center items-center space-x-1">
            {/* <Search size={18} /> */}
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
