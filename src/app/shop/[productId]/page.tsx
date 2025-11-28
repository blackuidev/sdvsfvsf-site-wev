import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Rating } from '@/components/ui/rating';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  sizes: string[];
  colors: string[];
  rating: number;
  numReviews: number;
}

// Placeholder product data (replace with actual data fetching)
const products: Product[] = [
  {
    id: '1',
    name: 'Running Shoe X', 
    description: 'The ultimate running shoe for maximum performance and comfort. Designed with breathable mesh and responsive cushioning.',
    images: [
      'https://images.unsplash.com/photo-1549298713-244e32c62a54?auto=format&fit=crop&w=500&h=400',
      'https://images.unsplash.com/photo-1583394842755-5f149e2060cc?auto=format&fit=crop&w=500&h=400',
      'https://images.unsplash.com/photo-1606107557195-0a29a5b4b4aa?auto=format&fit=crop&w=500&h=400'
    ],
    price: 129.99,
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: ['Black', 'Blue', 'Gray'],
    rating: 4.5,
    numReviews: 52
  },
  {
    id: '2',
    name: 'Casual Sneaker Y', 
    description: 'Stylish and comfortable sneakers for everyday wear. Made with premium materials and a classic design.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&h=400',
      'https://images.unsplash.com/photo-1604147495798-5700672b93ca?auto=format&fit=crop&w=500&h=400',
      'https://images.unsplash.com/photo-1586313968731-80429ca5334f?auto=format&fit=crop&w=500&h=400'
    ],
    price: 89.99,
    sizes: ['US 6', 'US 7', 'US 8', 'US 9'],
    colors: ['White', 'Red', 'Green'],
    rating: 4.2,
    numReviews: 38
  }
];

interface Props {
  params: { productId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = params;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

const ProductDetailPage: React.FC<Props> = ({ params }) => {
  const { productId } = params;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <motion.div
      className="container mx-auto py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images Carousel */}
        <div className="md:sticky top-0">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <Rating value={product.rating} />
            <span className="text-gray-500 ml-2">({product.numReviews} Reviews)</span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="text-xl font-semibold">Price: ${product.price.toFixed(2)}</p>
          </div>

          {/* Size and Color Selection */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Select Size:</h2>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <Button variant="outline" key={size}>{size}</Button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Select Color:</h2>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <Button variant="outline" key={color}>{color}</Button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <Button className="w-full bg-black text-white hover:bg-gray-800">Add to Cart</Button>

          {/* Tabs for Description and Reviews */}
          <Tabs defaultValue="description" className="mt-8">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-gray-700">{product.description}. This shoe is designed for comfort and performance.</p>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              {/* Customer Reviews (Placeholder) */}
              <p className="text-gray-700">No reviews yet.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products (Placeholder) */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        {/* Implement logic to display related products here */}
        <p className="text-gray-500">Coming soon...</p>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
