import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, Star, Award } from 'lucide-react';
import seedData from '@/content/seed.json';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const categories = [
    'all',
    'Factory Automation',
    'Industrial Motors',
    'Bearings',
    'Linear Motion',
    'Power Transmission',
    'Pneumatics',
    'Automation',
    'Electrical',
    'Power',
    'Control Systems'
  ];

  const brands = ['all', ...seedData.brands.map(b => b.name)];

  const filteredProducts = seedData.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Industrial Products & Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of industrial automation products from world-class manufacturers. 
              Find the perfect solution for your manufacturing needs.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-input rounded-md bg-background"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-2 border border-input rounded-md bg-background"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand === 'all' ? 'All Brands' : brand}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="text-center">
              <span className="text-muted-foreground">
                {filteredProducts.length} products found
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="p-6 hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Header */}
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-muted-foreground">4.8</span>
                  </div>
                </div>
                
                {/* Brand */}
                <div className="text-sm text-primary font-medium mb-2">
                  {product.brand}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-neutral-dark">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-dark mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 2).map((app, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex flex-col space-y-3">
                  <Button asChild className="w-full">
                    <Link to={`/products/${product.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or browse all categories.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our engineering team can design and develop custom industrial 
              automation solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <Link to="/contact">
                  Get Custom Quote
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/solution-finder">
                  Find Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;