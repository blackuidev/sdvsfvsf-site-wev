"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Shoe Store</title>
      </head>
      <body className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <motion.div
            className="flex-grow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
