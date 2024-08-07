import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import { Typography, Box, Card, CardContent, Button, Divider, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook to handle navigation

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#F5EDED' }}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <Card key={item.id} sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <CardMedia
              component="img"
              alt={item.name}
              height="140"
              image={item.image}
              sx={{ width: 140 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body1">Quantity: {item.quantity}</Typography>
              <Typography variant="body1">Price: ₹{item.price.toFixed(2)}</Typography>
              <Typography variant="body1">Total: ₹{(item.price * item.quantity).toFixed(2)}</Typography>
            </CardContent>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(item.id)}
              sx={{ marginRight: '16px' }}
            >
              <DeleteIcon />
            </IconButton>
          </Card>
        ))
      )}
      {cart.length > 0 && (
        <Box sx={{ marginTop: '20px' }}>
          <Divider style={{ marginBottom: '20px' }} />
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: '#054788' }}
            onClick={handleCheckout} // Handle checkout
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </div>
  );
};

export default CartPage;
