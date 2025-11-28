import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-all duration-300 ${isSticky ? 'shadow-md' : ''}`}
      style={{ opacity }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}        
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors duration-200">
          Shoe Store
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
          <Link to="/shop" className="hover:text-primary transition-colors duration-200">Shop</Link>
          <Link to="/about" className="hover:text-primary transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
        </nav>

        {/* Search Bar and Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input type="text" placeholder="Search..." className="pr-10 rounded-full" />
            <Search className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
          </div>
          <Button variant="ghost" asChild>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-1">0</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu (Hamburger icon) - Implement later if needed */}
      </div>
    </motion.header>
  );
};

export default Header;
