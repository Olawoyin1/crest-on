import { useState, useEffect } from 'react';
import PropertyCard, { PropertyData } from '../components/PropertyCard';
import { Grid, List, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import * as Slider from "@radix-ui/react-slider";
import { toast } from 'sonner';

// Sample data
const allProperties: PropertyData[] = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    price: 350000,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    location: "Downtown, New York",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "buy"
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    price: 5000,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    location: "Beverly Hills, Los Angeles",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: "rent"
  },
  {
    id: 3,
    title: "Cozy Family Home",
    price: 425000,
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
    location: "Suburbia, Seattle",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "buy"
  },
  {
    id: 4,
    title: "Penthouse with Terrace",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    location: "Manhattan, New York",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    type: "rent"
  },
  {
    id: 5,
    title: "Renovated Historic Building",
    price: 620000,
    imageUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    location: "Cambridge, Boston",
    bedrooms: 5,
    bathrooms: 3,
    area: 3600,
    type: "buy"
  },
  {
    id: 6,
    title: "Contemporary Studio",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1531835551805-16d864c8d311",
    location: "SoHo, New York",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    type: "rent"
  }
];

const Listings = () => {
  const location = useLocation();
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [purpose, setPurpose] = useState<'buy' | 'rent' | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (location.state) {
      const { location: locParam, priceRange: priceParam, propertyType: typeParam, purpose: purposeParam } = location.state as any;
      if (locParam) setSearchTerm(locParam);
      if (typeParam) setPropertyType(typeParam);
      if (purposeParam) setPurpose(purposeParam as 'buy' | 'rent' | null);
      if (priceParam) {
        const [min, max] = priceParam.split('-').map(Number);
        if (!isNaN(min) && !isNaN(max)) {
          setPriceRange([min, max]);
        } else if (priceParam.includes('+')) {
          const min = parseInt(priceParam);
          if (!isNaN(min)) {
            setPriceRange([min, 2000000]);
          }
        }
      }
    }
  }, [location.state]);

  const filteredProperties = allProperties.filter((property) => {
    if (
      searchTerm &&
      !property.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !property.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) return false;

    if (purpose && property.type !== purpose) return false;

    if (bedrooms !== null && property.bedrooms < bedrooms) return false;

    if (property.price < priceRange[0] || property.price > priceRange[1]) return false;

    return true;
  });
  
  useEffect(() => {
      toast('👋 Welcome to our listings!', {
        id: 'lisings-toast',
        description: 'Find your perfect property today.',
        duration: 4000,
      });
    }, []);

  return (

    <>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-3xl font-semibold mb-6">Browse Properties</h1>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by location or property name..."
            className="pl-10 py-3 w-full border border-b-cyan-400 rounded-lg "
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 p-6 bg-white rounded-lg border border-gray-300 h-fit ">
            <h2 className="text-xl font-semibold mb-6">Filter Properties</h2>

            {/* Purpose */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Purpose</h3>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 cursor-pointer rounded border ${purpose === 'buy' ? 'bg-blue-900 text-white' : 'bg-gray-100'}`}
                  onClick={() => setPurpose(purpose === 'buy' ? null : 'buy')}
                >
                  Buy
                </button>
                <button
                  className={`px-4 py-2 cursor-pointer rounded border ${purpose === 'rent' ? 'bg-green-900 text-white' : 'bg-gray-100'}`}
                  onClick={() => setPurpose(purpose === 'rent' ? null : 'rent')}
                >
                  Rent
                </button>
              </div>
            </div>

            {/* Price Slider */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Price Range</h3>
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                min={0}
                max={2000000}
                step={10000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              >
                <Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
                  <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-md hover:bg-blue-100 focus:outline-none" />
                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-md hover:bg-blue-100 focus:outline-none" />
              </Slider.Root>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Bedrooms</h3>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, '5+'].map((num, index) => {
                  const val = typeof num === 'number' ? num : 5;
                  return (
                    <button
                      key={index}
                      className={`px-3 cursor-pointer py-1 rounded border ${bedrooms === val ? 'bg-blue-900 text-white' : 'bg-gray-100'}`}
                      onClick={() => setBedrooms(bedrooms === val ? null : val)}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset */}
            <button
              onClick={() => {
                setPriceRange([0, 1000000]);
                setBedrooms(null);
                setPropertyType(null);
                setPurpose(null);
                setSearchTerm('');
              }}
              className="w-full cursor-pointer py-2 mt-4 bg-gray-100 rounded hover:bg-gray-200 text-sm"
            >
              Reset Filters
            </button>
          </div>

          {/* Property Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                <strong>{filteredProperties.length}</strong> Properties found
              </p>
              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded ${viewType === 'grid' ? 'bg-gray-300' : 'bg-gray-100'}`}
                  onClick={() => setViewType('grid')}
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`p-2 rounded ${viewType === 'list' ? 'bg-gray-300' : 'bg-gray-100'}`}
                  onClick={() => setViewType('list')}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Render Properties */}
            {filteredProperties.length > 0 ? (
              <div className={viewType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-10 rounded-lg text-center">
                <p className="text-lg text-gray-600">No properties found.</p>
                <button
                  className="mt-2 text-blue-600 underline"
                  onClick={() => {
                    setPriceRange([0, 1000000]);
                    setBedrooms(null);
                    setPropertyType(null);
                    setPurpose(null);
                    setSearchTerm('');
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Listings;
