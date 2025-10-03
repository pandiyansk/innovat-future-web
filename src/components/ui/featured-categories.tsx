import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings, Circle, Wind, ArrowRight, Download } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      icon: Settings,
      title: 'Automation',
      href: '/products'
    },
    {
      icon: Circle,
      title: 'Bearings',
      href: '/products'
    },
    {
      icon: Wind,
      title: 'Pneumatics',
      href: '/products'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Leading the charge in energy efficient automation solutions
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            We offer advanced automation products including AC Drives, PLCs, HMIs, Servo
            Systems, and complete energy solutions tailored for modern industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg px-8"
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
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent px-8"
              asChild
            >
              <Link to="/products">
                <Download className="mr-2 h-5 w-5" />
                Download Catalogue
              </Link>
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                to={category.href}
                className="group animate-scale-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
