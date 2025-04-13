
import React from 'react';
// import { SiPlanet } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize2 } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';

export interface PropertyData {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'buy' | 'rent';
}

interface PropertyCardProps {
  property: PropertyData;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const { id, title, price, imageUrl, location, bedrooms, bathrooms, area, type } = property;
  
  return (
    <Link to={`/listing/${id}`} className={`card transition-hover p-2 border-gray-300  border overflow-hidden rounded-xl ${featured ? 'h-full' : ''}`}>
      {/* Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-xl  h-48 object-cover"
        />
        <span className={`absolute top-4 left-4 inline-block px-2 py-0.5 text-xs font-semibold text-white rounded-full ${type === 'rent' ? 'bg-green-700 text-navy' : 'b bg-blue-950'}`}>
          {type === 'rent' ? 'For Rent' : 'For Sale'}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-3 pb-0 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-md headings line-clamp-1">{title}</h3>
          <p className="font-bold text-primary">
            ${price.toLocaleString()}
            {type === 'rent' && <span className="text-sm font-normal">/mo</span>}
          </p>
        </div>
        
        {/* Location */} 
        <div className="flex items-center text-gray-500">
          <MapPin size={16} className="mr-1" />
          <p className="text-sm">{location}</p>
        </div>
        
        {/* Features */}
        <div className="flex justify-between  border-gray-100">
          <div className="flex items-center text-gray-700">
            <Bed size={16} className="mr-1" />
            <span className="text-sm">{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Bath size={16} className="mr-1" />
            <span className="text-sm">{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Maximize2 size={16} className="mr-1" />
            <span className="text-sm">{area} sq ft</span>
          </div>
        </div>
        
        
      </div>
    </Link>
  );
};

export default PropertyCard;
