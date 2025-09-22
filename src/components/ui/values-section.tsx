import React from 'react';
import { 
  Zap, 
  Users, 
  Leaf, 
  ShoppingCart,
  Target,
  Award
} from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      title: 'Operational Efficiency',
      description: 'Streamline your operations with smart automation solutions that reduce costs and improve productivity.',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      stats: '40% efficiency gain'
    },
    {
      title: 'Job Creation',
      description: 'Our solutions create high-skilled jobs while automating repetitive tasks, fostering human-machine collaboration.',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      stats: '10,000+ jobs supported'
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly manufacturing solutions that reduce waste, energy consumption, and environmental impact.',
      icon: Leaf,
      gradient: 'from-emerald-500 to-green-600',
      stats: '30% energy savings'
    },
    {
      title: 'Product Access',
      description: 'Global distribution network ensures rapid access to quality products and technical support worldwide.',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
      stats: '24/7 support'
    },
  ];

  const achievements = [
    {
      title: 'Industry Leadership',
      description: 'Leading provider in industrial automation for over 30 years',
      icon: Target,
      color: 'text-primary'
    },
    {
      title: 'Quality Excellence',
      description: 'ISO certified manufacturing and quality management systems',
      icon: Award,
      color: 'text-blue-600'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-neutral-dark to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving industrial transformation through innovation, sustainability, 
            and unwavering commitment to excellence.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Stats */}
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${value.gradient} text-white text-sm font-medium`}>
                    {value.stats}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${value.gradient} -z-10 blur-xl`} />
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="flex items-center space-x-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${achievement.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-red-600 p-0.5 rounded-xl">
            <div className="bg-gray-900 rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
              <p className="text-gray-300 mb-6">
                Let our experts help you find the perfect industrial solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;