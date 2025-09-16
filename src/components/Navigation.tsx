import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    
    { name: 'About Us', value: 'about' },
    { name: 'Services', value: 'services' },
   
    { name: 'Pricing', value: 'pricing' },
    { name: 'Blog', value: 'blog' },
    { name: 'Contact', value: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         'bg-white/90 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl tracking-tight"
            >
              SMM
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setCurrentPage(item.value)}
                  className={`px-3 py-2 transition-colors duration-200 hover:text-primary ${
                    currentPage === item.value ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => setCurrentPage('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === item.value
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:bg-accent'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  setCurrentPage('contact');
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}