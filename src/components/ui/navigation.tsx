import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products & Brands', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-neutral-dark text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@goodwillautomation.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Follow us:</span>
            {/* Social media icons would go here */}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">Goodwill</div>
                <div className="text-xs text-muted-foreground">Automation & Service</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-neutral-dark hover:text-primary"
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/solution-finder">
                  <Search className="h-4 w-4 mr-2" />
                  Solution Finder
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/downloads">Get Catalogue</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-sm font-medium py-2 px-4 rounded-md transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-muted"
                        : "text-neutral-dark hover:text-primary hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/solution-finder" onClick={() => setIsOpen(false)}>
                      <Search className="h-4 w-4 mr-2" />
                      Solution Finder
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/downloads" onClick={() => setIsOpen(false)}>
                      Get Catalogue
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;