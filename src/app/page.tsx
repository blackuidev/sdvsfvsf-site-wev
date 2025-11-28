"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const shoes = [
  {
    id: '1', name: 'SpeedRunner Pro', price: 149.99, image: 'https://images.unsplash.com/photo-1542296638-77a1bf2494eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==',
    description: 'Experience unmatched speed and agility with the SpeedRunner Pro. Designed for peak performance.'
  },
  {
    id: '2', name: 'AirMax Ultra', price: 129.99, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c951ca9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==',
    description: 'The classic AirMax redefined. Lightweight, comfortable, and stylish for everyday wear.'
  },
  {
    id: '3', name: 'TrailBlazer X', price: 99.99, image: 'https://images.unsplash.com/photo-1600851271338-22627029a1f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==',
    description: 'Conquer any terrain with the TrailBlazer X. Durable, waterproof, and built for adventure.'
  },
  {
    id: '4', name: 'CushionRide Plus', price: 79.99, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==',
    description: 'Experience ultimate comfort with the CushionRide Plus. Perfect for long runs and everyday support.'
  }
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const HomePage = () => {
  return (
    <motion.div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12 lg:px-24" variants={fadeInAnimation} initial="initial" animate="animate">

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="container mx-auto text-center">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-in fade-in zoom-in" variants={fadeInAnimation}>
            Step into Style and Comfort
          </motion.h1>
          <motion.p className="text-lg text-gray-700 mb-8 animate-in fade-in zoom-in delay-100" variants={fadeInAnimation}>
            Discover the perfect pair of shoes for every occasion.
          </motion.p>
          <motion.div className="animate-in fade-in zoom-in delay-200" variants={fadeInAnimation}>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors duration-300">
              Explore New Arrivals <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-10 rounded-xl blur-3xl -z-10"></div>
      </section>

      <Separator className="my-8" />

      {/* New Arrivals */}
      <section className="py-12">
        <div className="container mx-auto">
          <motion.h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center" variants={fadeInAnimation}>
            New Arrivals
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shoes.slice(0, 4).map((shoe) => (
              <motion.div key={shoe.id} className="animate-in fade-in zoom-in" variants={fadeInAnimation}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{shoe.name}</CardTitle>
                    <CardDescription>{shoe.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={shoe.image} alt={shoe.name} className="rounded-md w-full h-48 object-cover mb-4" />
                    <p className="text-2xl font-bold text-gray-900">${shoe.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Bestsellers Carousel */}
      <section className="py-12">
        <div className="container mx-auto">
          <motion.h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center" variants={fadeInAnimation}>
            Bestsellers
          </motion.h2>
          <Carousel items={shoes} />
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-12">
        <motion.div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl p-8 md:p-12 flex items-center justify-between animate-in fade-in slide-in-from-bottom" variants={fadeInAnimation}>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Limited Time Offer!</h3>
            <p className="text-md md:text-lg">Get 20% off on all running shoes. Use code RUN20 at checkout.</p>
          </div>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
            Shop Now
          </Button>
        </motion.div>
      </section>

    </motion.div>
  );
};

export default HomePage;
