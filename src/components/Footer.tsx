import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-noise text-white py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              Your go-to destination for premium footwear. We offer a curated
              selection of stylish and comfortable shoes for every occasion.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shoe Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
