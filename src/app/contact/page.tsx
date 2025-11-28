"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Simulate API call (replace with your actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form data submitted:', data);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-12 px-6 md:px-12 lg:px-24 text-white"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.div className="max-w-3xl mx-auto backdrop-blur-md bg-white/10 border-white/20 rounded-lg p-8 gap-6 flex flex-col" >
        <motion.h1 className="text-3xl font-bold text-center mb-6" variants={fadeIn}>
          Contact Us
        </motion.h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-white">Name</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input id="name" type="text" placeholder="Your Name" {...field} />
              )}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-white">Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input id="email" type="email" placeholder="Your Email" {...field} />
              )}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-white">Message</Label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea id="message" placeholder="Your Message" rows={4} {...field} />
              )}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300">
            Send Message
          </Button>
        </form>

        <motion.div className="mt-8 space-y-4" variants={fadeIn}>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-gray-400" />
            <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-gray-400" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div>
            <p>123 Main Street</p>
            <p>Anytown, CA 12345</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
