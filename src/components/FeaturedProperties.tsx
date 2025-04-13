
// import React from 'react';
import PropertyCard, { PropertyData } from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample data for featured properties
const featuredProperties: PropertyData[] = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    price: 350000,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    location: "Suburbia, Seattle",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "buy"
  }
];

const FeaturedProperties = () => {
  return (
    <section className="section-padding py-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-bold headings">Featured Properties</h2>
            <p className="text-gray-600 mt-2">
              Handpicked properties by our team
            </p>
          </div>
          <Link to="/properties" className="text-primary font-medium flex items-center hover:underline">
            <span>View All</span>
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
