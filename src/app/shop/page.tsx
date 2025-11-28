"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import { Grid, GridItem } from '@/components/ui/grid';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const shoes = [
  { id: 1, name: 'Athletic Shoe', price: 79.99, imageUrl: 'https://images.unsplash.com/photo-1542296637-9a9846946470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', category: 'Running', size: '10', brand: 'Nike' },
  { id: 2, name: 'Casual Sneaker', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1560769629-975ef6bbefb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', category: 'Casual', size: '9', brand: 'Adidas' },
  { id: 3, name: 'Leather Boot', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1603955611348-1942d039aa62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', category: 'Boots', size: '11', brand: 'Timberland' },
  { id: 4, name: 'High Heels', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bfad65617c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', category: 'Heels', size: '7', brand: 'Gucci' },
  { id: 5, name: 'Sandals', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1591224408146-9129979658ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', category: 'Sandals', size: '8', brand: 'Birkenstock' },
];

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'priceAsc' | 'priceDesc' | 'relevance' | null>(null);

  const filteredShoes = shoes.filter((shoe) => {
    const searchMatch = shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = categoryFilter === 'All' || shoe.category === categoryFilter;
    return searchMatch && categoryMatch;
  }).sort((a, b) => {
    if (sortBy === 'priceAsc') {
      return a.price - b.price;
    } else if (sortBy === 'priceDesc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Shop All Shoes</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <select
              className="bg-gray-700 text-white rounded px-4 py-2"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Running">Running</option>
              <option value="Casual">Casual</option>
              <option value="Boots">Boots</option>
              <option value="Heels">Heels</option>
              <option value="Sandals">Sandals</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            {sortBy === 'priceAsc' ? (
              <Button variant="outline" onClick={() => setSortBy(null)}><SortAsc className="h-5 w-5" /></Button>
            ) : (
              <Button variant="outline" onClick={() => setSortBy('priceAsc')}><SortAsc className="h-5 w-5" /></Button>
            )}
            {sortBy === 'priceDesc' ? (
              <Button variant="outline" onClick={() => setSortBy(null)}><SortDesc className="h-5 w-5" /></Button>
            ) : (
              <Button variant="outline" onClick={() => setSortBy('priceDesc')}><SortDesc className="h-5 w-5" /></Button>
            )}
          </div>

          <div className="flex-grow">
            <Input
              type="text"
              placeholder="Search shoes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Grid>
          {filteredShoes.map((shoe) => (
            <GridItem key={shoe.id} className="col-span-1 md:col-span-2 lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="transition-all duration-200"
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{shoe.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <img
                      src={shoe.imageUrl}
                      alt={shoe.name}
                      className="rounded-md w-full h-48 object-cover mb-4"
                    />
                    <CardDescription className="text-gray-400">Category: {shoe.category}</CardDescription>
                    <CardDescription className="text-gray-400">Size: {shoe.size}</CardDescription>
                    <CardDescription className="text-gray-400">Brand: {shoe.brand}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-xl font-bold">${shoe.price.toFixed(2)}</span>
                    <Button>Add to Cart</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ShopPage;
