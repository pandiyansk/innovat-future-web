import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
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
          
          {/* Key Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 animate-scale-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Product Lines</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
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
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 px-8 py-4 text-lg backdrop-blur-sm"
              asChild
            >
              <Link to="/downloads">
                <Download className="mr-2 h-5 w-5" />
                Download Catalogue
              </Link>
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;