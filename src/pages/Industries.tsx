import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Zap, Building2, Car, Wrench, Cpu, Shield, Truck } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete automation solutions for manufacturing processes including PLC systems, VFDs, and servo drives for enhanced productivity.",
      applications: ["Assembly Lines", "Quality Control", "Process Automation", "Material Handling"]
    },
    {
      icon: Zap,
      title: "Power & Energy",
      description: "Reliable power solutions with transformers, stabilizers, and energy management systems for industrial applications.",
      applications: ["Power Distribution", "Energy Monitoring", "Load Management", "Power Quality"]
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "Control panels and automation systems for building management, HVAC, and facility operations.",
      applications: ["Building Automation", "HVAC Control", "Security Systems", "Energy Management"]
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Precision automation solutions for automotive manufacturing with industrial motors, sensors, and control systems.",
      applications: ["Production Lines", "Robotic Assembly", "Quality Testing", "Material Transport"]
    },
    {
      icon: Wrench,
      title: "Heavy Engineering",
      description: "Robust industrial solutions including heavy-duty motors, bearings, and pneumatic systems for demanding applications.",
      applications: ["Material Processing", "Heavy Machinery", "Mining Equipment", "Construction"]
    },
    {
      icon: Cpu,
      title: "Electronics",
      description: "Specialized automation and precision control systems for electronics manufacturing and testing.",
      applications: ["PCB Assembly", "Component Testing", "Clean Room Systems", "Precision Control"]
    },
    {
      icon: Shield,
      title: "Defense",
      description: "High-reliability systems and components for defense applications with stringent quality requirements.",
      applications: ["Control Systems", "Power Management", "Communication", "Testing Equipment"]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Automated material handling solutions with conveyor systems, sensors, and warehouse automation.",
      applications: ["Warehouse Automation", "Sorting Systems", "Inventory Management", "Conveyor Control"]
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Delivering specialized automation and energy solutions across diverse industries 
                with over 30 years of expertise and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-primary">
                        {industry.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                        {industry.description}
                      </CardDescription>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Applications:</h4>
                        <ul className="space-y-1">
                          {industry.applications.map((app, appIndex) => (
                            <li key={appIndex} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you find the perfect automation and energy solutions for your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                Contact Our Experts
              </a>
              <a 
                href="/solution-finder" 
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Find Solutions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Industries;