import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingAddress({
      ...billingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Process the checkout data here (e.g., send to payment gateway, create order).
    console.log('Shipping Address:', shippingAddress);
    console.log('Billing Address:', billingAddress);
    console.log('Payment Info:', paymentInfo);
    alert('Order placed successfully!');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
                <CardDescription>Enter your shipping details.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={shippingAddress.firstName} onChange={handleShippingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={shippingAddress.lastName} onChange={handleShippingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" value={shippingAddress.address} onChange={handleShippingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={shippingAddress.city} onChange={handleShippingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Select onValueChange={(value) => setShippingAddress({...shippingAddress, state: value})}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a state" defaultValue={shippingAddress.state} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="AR">Arkansas</SelectItem>
                      {/* ... Add all states here ... */}
                      <SelectItem value="WY">Wyoming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" name="zip" value={shippingAddress.zip} onChange={handleShippingChange} />
                </div>

                <Button onClick={nextStep}>Next</Button>
              </CardContent>
            </Card>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
                <CardDescription>Enter your billing details.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="billingFirstName" name="firstName" value={billingAddress.firstName} onChange={handleBillingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="billingLastName" name="lastName" value={billingAddress.lastName} onChange={handleBillingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="billingAddress" name="address" value={billingAddress.address} onChange={handleBillingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="billingCity" name="city" value={billingAddress.city} onChange={handleBillingChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Select onValueChange={(value) => setBillingAddress({...billingAddress, state: value})}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a state" defaultValue={billingAddress.state} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="AR">Arkansas</SelectItem>
                      {/* ... Add all states here ... */}
                      <SelectItem value="WY">Wyoming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="billingZip" name="zip" value={billingAddress.zip} onChange={handleBillingChange} />
                </div>

                <Button onClick={prevStep}>Previous</Button>
                <Button onClick={nextStep}>Next</Button>
              </CardContent>
            </Card>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Enter your payment details.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" name="cardNumber" type="text" value={paymentInfo.cardNumber} onChange={handlePaymentChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" name="expiryDate" type="text" placeholder="MM/YY" value={paymentInfo.expiryDate} onChange={handlePaymentChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" name="cvv" type="text" value={paymentInfo.cvv} onChange={handlePaymentChange} />
                </div>

                <Button onClick={prevStep}>Previous</Button>
                <Button onClick={handleSubmit}>Place Order</Button>
              </CardContent>
            </Card>
          </motion.div>
        );
      default:
        return <div>Something went wrong.</div>;
    }
  };

  return (
    <div className="container py-12">
      <motion.h1
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Checkout
      </motion.h1>
      {renderStep()}
    </div>
  );
};

export default CheckoutPage;