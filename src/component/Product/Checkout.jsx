// src/Checkout.js

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Typography, Button, Card, CardContent, Box } from '@mui/material';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Placeholder for order placement logic
    alert('Order placed successfully!');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#FFDDF1' }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <div>
          {cart.map((item, index) => (
            <Card key={index} sx={{ marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h6">{item.product.name}</Typography>
                <Typography variant="body1">Price: ₹{item.product.price.toFixed(2)}</Typography>
                <Typography variant="body1">Quantity: {item.quantity}</Typography>
              </CardContent>
            </Card>
          ))}
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h6">Total Amount: ₹{totalAmount.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Checkout;
