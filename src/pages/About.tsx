import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  TrendingUp, 
  Shield,
  Factory,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1994', title: 'Company Founded', description: 'Started as a small bearing distributor' },
    { year: '2000', title: 'Automation Division', description: 'Expanded into industrial automation' },
    { year: '2008', title: 'ISO Certification', description: 'Achieved ISO 9001:2008 certification' },
    { year: '2015', title: 'Technology Center', description: 'Opened state-of-the-art R&D facility' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched Industry 4.0 solutions' },
    { year: '2024', title: '30 Years Legacy', description: 'Celebrating three decades of excellence' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide innovative industrial automation solutions that enhance productivity, efficiency, and competitiveness for our customers while fostering sustainable growth.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be the leading provider of industrial automation solutions in India, recognized for innovation, quality, and customer excellence.'
    },
    {
      icon: Shield,
      title: 'Values',
      description: 'Integrity, Innovation, Customer Focus, Quality Excellence, Sustainability, and Continuous Improvement drive everything we do.'
    }
  ];

  const leadership = [
    {
      name: 'Rajesh Kumar',
      position: 'Chief Executive Officer',
      experience: '25+ years',
      background: 'Former VP at Siemens India, MBA from IIM Mumbai'
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      experience: '20+ years',
      background: 'Ph.D. in Automation, Former R&D Head at ABB'
    },
    {
      name: 'Amit Patel',
      position: 'Chief Operations Officer',
      experience: '18+ years',
      background: 'Operations Excellence Expert, Six Sigma Black Belt'
    }
  ];

  const achievements = [
    { number: '30+', label: 'Years of Excellence' },
    { number: '10,000+', label: 'Satisfied Customers' },
    { number: '500+', label: 'Product Lines' },
    { number: '50+', label: 'Brand Partners' },
    { number: '15+', label: 'Cities Served' },
    { number: '99%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary">
              Est. 1994 - 30 Years of Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              About Luna Industrial Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over three decades, we've been at the forefront of industrial automation, 
              helping manufacturers across India optimize their operations and achieve 
              unprecedented levels of efficiency and productivity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-neutral-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1994 with a vision to revolutionize Indian manufacturing, 
                Luna Industrial Solutions began as a small bearing distributor in Mumbai. 
                Through relentless innovation and unwavering commitment to quality, we've 
                evolved into one of India's leading providers of industrial automation solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we serve over 10,000 customers across 15+ cities, offering comprehensive 
                solutions in automation, bearings, mechatronics, medical devices, pneumatics, 
                and robotics. Our partnerships with global leaders like Hiwin, Panasonic, 
                and Mindman enable us to deliver world-class technology to Indian industries.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {achievements.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our every decision and action
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="p-8 text-center hover:shadow-xl transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our 30-year journey of innovation and growth
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center mb-12 animate-slide-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-dark mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced leaders driving innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card 
                key={leader.name}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-neutral-dark mb-2">
                  {leader.name}
                </h3>
                <div className="text-primary font-medium mb-3">
                  {leader.position}
                </div>
                <Badge className="mb-4 bg-secondary text-secondary-foreground">
                  {leader.experience}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {leader.background}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications & Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-dark mb-8">
              Certifications & Recognition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'ISO 9001:2015', description: 'Quality Management' },
                { title: 'ISO 14001:2015', description: 'Environmental Management' },
                { title: 'Industry Excellence Award', description: '2023 Automation Leader' },
                { title: 'Customer Choice Award', description: 'Best Service Provider' },
              ].map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-neutral-dark mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-600">
        <div className="container mx-auto px-4 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Luna Industrial Solutions 
            for their automation needs. Let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/contact">
                Start Your Journey
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/solution-finder">
                Find Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;