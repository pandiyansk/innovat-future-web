import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'automation', name: 'Factory Automation' },
    { id: 'energy', name: 'Energy Solutions' },
    { id: 'panels', name: 'Control Panels' },
    { id: 'installation', name: 'Installations' }
  ];

  const projects = [
    {
      id: 1,
      title: "Automotive Assembly Line Automation",
      category: "automation",
      location: "Chennai, Tamil Nadu",
      date: "2024",
      description: "Complete automation solution for automotive manufacturing including PLC control, servo drives, and HMI systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      tags: ["PLC", "Servo Drives", "HMI", "Automotive"]
    },
    {
      id: 2,
      title: "Industrial Power Distribution System",
      category: "energy",
      location: "Coimbatore, Tamil Nadu",
      date: "2024",
      description: "High-capacity power distribution system with advanced monitoring and control capabilities.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      tags: ["Power Distribution", "Monitoring", "Control Systems"]
    },
    {
      id: 3,
      title: "Stainless Steel Control Panel Manufacturing",
      category: "panels",
      location: "Hosur, Tamil Nadu",
      date: "2024",
      description: "Custom-built stainless steel control panels for food processing industry with IP65 protection.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
      tags: ["Stainless Steel", "IP65", "Food Processing", "Custom Build"]
    },
    {
      id: 4,
      title: "Textile Mill Automation Upgrade",
      category: "automation",
      location: "Tirupur, Tamil Nadu",
      date: "2023",
      description: "Modernization of textile manufacturing processes with advanced PLC systems and motor drives.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
      tags: ["Textile", "Modernization", "PLC", "Motor Drives"]
    },
    {
      id: 5,
      title: "Solar Power Installation",
      category: "energy",
      location: "Bangalore, Karnataka",
      date: "2023",
      description: "Large-scale solar power installation with inverters, monitoring systems, and grid integration.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
      tags: ["Solar Power", "Inverters", "Grid Integration", "Monitoring"]
    },
    {
      id: 6,
      title: "Pharmaceutical Clean Room Controls",
      category: "automation",
      location: "Hyderabad, Telangana",
      date: "2023",
      description: "Precision environmental control systems for pharmaceutical manufacturing facility.",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=600&fit=crop",
      tags: ["Pharmaceutical", "Clean Room", "Environmental Control", "Precision"]
    },
    {
      id: 7,
      title: "Heavy Machinery Control Installation",
      category: "installation",
      location: "Salem, Tamil Nadu",
      date: "2023",
      description: "On-site installation and commissioning of control systems for heavy industrial machinery.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop",
      tags: ["Heavy Machinery", "Installation", "Commissioning", "Industrial"]
    },
    {
      id: 8,
      title: "Aluminum Control Panel Series",
      category: "panels",
      location: "Hosur, Tamil Nadu",
      date: "2023",
      description: "Lightweight aluminum control panels designed for outdoor industrial applications.",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
      tags: ["Aluminum", "Outdoor", "Industrial", "Lightweight"]
    },
    {
      id: 9,
      title: "Food Processing Automation",
      category: "automation",
      location: "Madurai, Tamil Nadu",
      date: "2022",
      description: "Complete automation solution for food processing plant with hygiene-focused design.",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=600&fit=crop",
      tags: ["Food Processing", "Hygiene", "Automation", "Processing Plant"]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Project Gallery
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our successful automation and energy solution projects across diverse industries. 
                Each project showcases our commitment to excellence and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(project.id)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                      <span>•</span>
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              {(() => {
                const project = projects.find(p => p.id === selectedImage);
                return project ? (
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{project.date}</span>
                        <span>•</span>
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let us bring the same level of expertise and dedication to your automation and energy solution needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="/solution-finder">Explore Solutions</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gallery;