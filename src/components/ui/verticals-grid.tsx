import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  CircleDot, 
  Cpu, 
  Activity, 
  Wind, 
  Bot,
  ArrowRight 
} from 'lucide-react';

const VerticalsGrid = () => {
  const verticals = [
    {
      title: 'Automation',
      description: 'Advanced industrial automation solutions for modern manufacturing',
      icon: Settings,
      href: '/industries/automation',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      title: 'Bearings',
      description: 'Precision bearings for high-performance industrial applications',
      icon: CircleDot,
      href: '/industries/bearings',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      title: 'Mechatronics',
      description: 'Integrated mechanical and electronic systems engineering',
      icon: Cpu,
      href: '/industries/mechatronics',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      title: 'Medical',
      description: 'Medical device solutions with precision and reliability',
      icon: Activity,
      href: '/industries/medical',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      title: 'Pneumatics',
      description: 'Pneumatic systems and components for industrial automation',
      icon: Wind,
      href: '/industries/pneumatics',
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'hover:from-cyan-600 hover:to-cyan-700'
    },
    {
      title: 'Robotics',
      description: 'Robotic solutions for next-generation manufacturing',
      icon: Bot,
      href: '/industries/robotics',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive industrial solutions across multiple verticals, 
            engineered for excellence and built for the future.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => {
            const IconComponent = vertical.icon;
            return (
              <Link
                key={vertical.title}
                to={vertical.href}
                className="group block"
              >
                <div className={`
                  card-industrial p-8 h-full transform transition-all duration-300 
                  hover:scale-105 hover:shadow-xl relative overflow-hidden
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${vertical.color} 
                    opacity-0 group-hover:opacity-5 transition-opacity duration-300
                  `} />
                  
                  {/* Icon */}
                  <div className={`
                    relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${vertical.color} 
                    flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                  `}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                      {vertical.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {vertical.description}
                    </p>
                    
                    {/* Arrow */}
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Explore Solutions</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-transparent group-hover:scale-150 transition-transform duration-500" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/industries"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Industries
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VerticalsGrid;