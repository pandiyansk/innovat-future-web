import React from 'react';
import { Card } from '@/components/ui/card';

const BrandsCarousel = () => {
  const brands = [
    { name: 'Hiwin', logo: 'H', description: 'Linear Motion Technology' },
    { name: 'Panasonic', logo: 'P', description: 'Automation Solutions' },
    { name: 'Mindman', logo: 'M', description: 'Pneumatic Components' },
    { name: 'TPI Bearings', logo: 'T', description: 'Precision Bearings' },
    { name: 'Timotion', logo: 'TM', description: 'Electric Linear Actuators' },
    { name: 'SKF', logo: 'S', description: 'Bearing Solutions' },
    { name: 'NSK', logo: 'N', description: 'Motion & Control' },
    { name: 'THK', logo: 'THK', description: 'Linear Motion Systems' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Trusted Brand Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with world-class manufacturers to deliver the finest 
            industrial solutions and components to our customers.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {brands.map((brand, index) => (
            <Card 
              key={brand.name}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary">{brand.logo}</span>
              </div>
              
              {/* Brand Info */}
              <h3 className="font-bold text-neutral-dark mb-2 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {brand.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Infinite Scroll Animation */}
        <div className="relative overflow-hidden bg-muted/30 rounded-2xl p-8">
          <div className="flex animate-marquee space-x-8">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center space-x-3 bg-white px-6 py-3 rounded-lg shadow-sm"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{brand.logo}</span>
                </div>
                <span className="font-medium text-neutral-dark whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '50+', label: 'Brand Partners' },
            { number: '30+', label: 'Years Partnership' },
            { number: '500+', label: 'Product Lines' },
            { number: '99%', label: 'Customer Satisfaction' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsCarousel;