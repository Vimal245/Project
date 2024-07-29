// src/Cart.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', backgroundColor: '#FFDDF1' }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
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
                <Button variant="contained" color="secondary" onClick={() => handleRemove(item.product.id)}>
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h6">Total Amount: ₹{totalAmount.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" component={Link} to="/checkout">
              Proceed to Checkout
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Cart;
