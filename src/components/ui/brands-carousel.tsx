import React from 'react';
import { Card } from '@/components/ui/card';
import abbLogo from '@/assets/brands/abb.png';
import airtechLogo from '@/assets/brands/airtech.png';
import deltaLogo from '@/assets/brands/delta.png';
import goodwillLogo from '@/assets/brands/goodwill.png';
import hiwinLogo from '@/assets/brands/hiwin.png';
import inovanceLogo from '@/assets/brands/inovance.png';
import invtLogo from '@/assets/brands/invt.png';
import janaticsLogo from '@/assets/brands/janatics.png';
import mitsubishiLogo from '@/assets/brands/mitsubishi.png';
import ntnLogo from '@/assets/brands/ntn.png';
import omronLogo from '@/assets/brands/omron.png';
import polycabLogo from '@/assets/brands/polycab.png';
import schneiderLogo from '@/assets/brands/schneider.png';
import siemensLogo from '@/assets/brands/siemens.png';
import skfLogo from '@/assets/brands/skf.png';
import smcLogo from '@/assets/brands/smc.png';
import vguardLogo from '@/assets/brands/vguard.png';
import wegLogo from '@/assets/brands/weg.png';
import zdLogo from '@/assets/brands/zd.png';

const BrandsCarousel = () => {
  const brands = [
    { name: 'Delta Electronics', logo: deltaLogo, description: 'PLC & Automation Solutions' },
    { name: 'Mitsubishi Electric', logo: mitsubishiLogo, description: 'Factory Automation & CNC' },
    { name: 'Schneider Electric', logo: schneiderLogo, description: 'Energy Management' },
    { name: 'Siemens', logo: siemensLogo, description: 'Industrial Automation' },
    { name: 'INVT', logo: invtLogo, description: 'Energy Saving Solutions' },
    { name: 'INOVANCE', logo: inovanceLogo, description: 'Drive Technology' },
    { name: 'SKF', logo: skfLogo, description: 'Bearing Solutions' },
    { name: 'NTN', logo: ntnLogo, description: 'Precision Bearings' },
    { name: 'SMC', logo: smcLogo, description: 'Pneumatic Solutions' },
    { name: 'ABB', logo: abbLogo, description: 'Power & Automation Technologies' },
    { name: 'Airtech', logo: airtechLogo, description: 'Pneumatic Components' },
    { name: 'Goodwill', logo: goodwillLogo, description: 'Automation & Service' },
    { name: 'Hiwin', logo: hiwinLogo, description: 'Linear Motion & Control' },
    { name: 'Janatics', logo: janaticsLogo, description: 'Pneumatic Cylinders & Valves' },
    { name: 'Omron', logo: omronLogo, description: 'Industrial Automation' },
    { name: 'Polycab', logo: polycabLogo, description: 'Cables & Wires' },
    { name: 'V-Guard', logo: vguardLogo, description: 'Electrical & Electronic Products' },
    { name: 'Weg', logo: wegLogo, description: 'Motors & Drives' },
    { name: 'ZD', logo: zdLogo, description: 'Gear Motors' },
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
                <img src={brand.logo} alt={brand.name} className="h-10 w-10 object-contain" />
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
                  <img src={brand.logo} alt={brand.name} className="h-6 w-6 object-contain" />
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