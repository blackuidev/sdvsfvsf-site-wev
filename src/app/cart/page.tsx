import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart items from local storage or an API
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Table>
          <TableCaption>A list of items currently in your cart.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Separator className="my-4" />
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Total: ${calculateTotal().toFixed(2)}</div>
        <Button size="lg">Checkout</Button>
      </div>
    </motion.div>
  );
};

export default CartPage;
