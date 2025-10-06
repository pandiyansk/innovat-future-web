import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Cog, Disc, AirVent } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Floating Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="text-sm font-medium">
              ✨ Trusted Industrial Automation Partner
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient-primary bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              GOODWILL AUTOMATION
            </span>
            <br />
            & SERVICE
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Leading the Charge in Energy & Automation Solutions
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer advanced automation products including AC Drives, PLCs, HMIs, Servo Systems, 
            and complete energy solutions tailored for modern industries.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-20">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              asChild
            >
              <Link to="/solution-finder">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-8 py-4 text-lg backdrop-blur-sm font-semibold"
              asChild
            >
              <Link to="/products">
                <Download className="mr-2 h-5 w-5" />
                Download Catalogue
              </Link>
            </Button>
          </div>
          
          {/* Category Icons */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-2xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/products" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Cog className="w-full h-full text-white" strokeWidth={1.5} />
              </div>
              <span className="text-white text-lg md:text-xl font-semibold">Automation</span>
            </Link>
            
            <Link to="/products" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Disc className="w-full h-full text-white" strokeWidth={1.5} />
              </div>
              <span className="text-white text-lg md:text-xl font-semibold">Bearings</span>
            </Link>
            
            <Link to="/products" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <AirVent className="w-full h-full text-white" strokeWidth={1.5} />
              </div>
              <span className="text-white text-lg md:text-xl font-semibold">Pneumatics</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;