import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import HeroSection from '@/components/ui/hero-section';
import VerticalsGrid from '@/components/ui/verticals-grid';
import BrandsCarousel from '@/components/ui/brands-carousel';
import ValuesSection from '@/components/ui/values-section';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Download, Award, Users, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Verticals Grid */}  
      <VerticalsGrid />
      
      {/* Brands Carousel */}
      <BrandsCarousel />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Solution Finder CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Solution
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our intelligent Solution Finder helps you discover the ideal 
              industrial automation products for your specific requirements.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
              asChild
            >
              <Link to="/solution-finder">
                <Search className="mr-2 h-5 w-5" />
                Start Solution Finder
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Featured Product Lines
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of industrial automation and 
              precision engineering solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Linear Guideway',
                description: 'High-precision linear motion systems for industrial automation',
                features: ['High Rigidity', 'Low Friction', 'Long Life'],
                href: '/products/linear-guideway'
              },
              {
                title: 'Precision Ballscrews',
                description: 'Efficient ballscrew assemblies for precise linear motion',
                features: ['High Efficiency', 'Low Backlash', 'Customizable'],
                href: '/products/ballscrew'
              },
              {
                title: 'Servo Motors',
                description: 'High-performance AC servo motors for motion control',
                features: ['High Torque', 'Precise Control', 'Reliable'],
                href: '/products/servo-motor'
              },
              {
                title: 'Variable Frequency Drives',
                description: 'Energy-efficient motor speed and torque control',
                features: ['Energy Saving', 'Network Ready', 'Easy Programming'],
                href: '/products/vfd'
              },
              {
                title: 'Industrial Bearings',
                description: 'High-quality bearings for industrial machinery',
                features: ['Low Friction', 'High Load', 'Versatile'],
                href: '/products/industrial-bearings'
              },
              {
                title: 'PLC & HMI Systems',
                description: 'Complete automation control and interface solutions',
                features: ['User-Friendly', 'Expandable', 'Network Ready'],
                href: '/products/plc-hmi'
              },
            ].map((product, index) => (
              <div
                key={product.title}
                className="card-industrial p-6 hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-1 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={product.href}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Company Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  30+ Years of Excellence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                  Your Trusted Industrial Problem Solver
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  For over three decades, Luna Industrial Solutions has been at the 
                  forefront of industrial automation innovation. We've helped thousands 
                  of manufacturers optimize their operations, reduce costs, and achieve 
                  unprecedented levels of efficiency.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
                    <div className="text-sm text-muted-foreground">Satisfied Customers</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Product Lines</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/about">
                      <Users className="mr-2 h-5 w-5" />
                      About Our Company
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link to="/contact">
                      <Globe className="mr-2 h-5 w-5" />
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                      Industry Recognition
                    </h3>
                    <p className="text-muted-foreground">
                      Recognized as a leading industrial automation solutions provider 
                      with ISO certifications and industry awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
