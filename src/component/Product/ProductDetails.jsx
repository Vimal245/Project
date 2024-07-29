// src/ProductDetails.js

import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, IconButton, Divider, Box, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartContext } from './CartContext';

// Sample product data
const productData = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: '/n4.jpg',
      additionalImages: ['/n5.jpg', '/n6.jpg', '/n5.jpg', '/n6.jpg', '/n5.jpg', '/n6.jpg'], // Additional images
      description: 'This is a detailed description of Product 1.',
      reviews: [
        { user: 'Alice', comment: 'Great product!', rating: 4 },
        { user: 'Bob', comment: 'Value for money.', rating: 5 },
      ],
      additionalDetails: {
        weight: '1 kg',
        dimensions: '10x10x10 cm',
        manufacturer: 'Company XYZ',
        warranty: '1 year',
      },
      availableInStores: [
        { name: 'Store A', location: 'Location A', stock: 10, distance: '2 km' },
        { name: 'Store B', location: 'Location B', stock: 5, distance: '5 km' },
        { name: 'Store C', location: 'Location C', stock: 20, distance: '10 km' },
      ], // List of stores
    },
    // Add other products similarly
    // ... (same format as above)
  ];    
const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#FFDDF1' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
        {/* Left Side: Small Images */}
        <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
          {product.additionalImages.map((img, index) => (
            <Card key={index} sx={{ marginBottom: '10px', maxWidth: 100 }}>
              <CardMedia component="img" height="100" image={img} alt={`Additional ${index}`} />
            </Card>
          ))}
        </Box>

        {/* Right Side: Product Details and Stores */}
        <Box sx={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* Product Details */}
            <Box sx={{ flex: 2 }}>
              <Card sx={{ maxWidth: 600, marginBottom: '20px' }}>
                <CardMedia component="img" height="400" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    ₹{product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Weight:</strong> {product.additionalDetails.weight}
                    <br />
                    <strong>Dimensions:</strong> {product.additionalDetails.dimensions}
                    <br />
                    <strong>Manufacturer:</strong> {product.additionalDetails.manufacturer}
                    <br />
                    <strong>Warranty:</strong> {product.additionalDetails.warranty}
                  </Typography>
                </CardContent>
              </Card>
              <TextField
                label="Quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                sx={{ marginBottom: '20px', maxWidth: 100 }}
              />
              <Button variant="contained" color="primary" size="large" onClick={handleAddToCart} style={{ marginBottom: '20px' }}>
                Add to Cart
              </Button>
              <Button variant="contained" color="secondary" size="large" style={{ marginBottom: '20px', marginLeft: '10px' }}>
                Buy Now
              </Button>
              <IconButton aria-label="add to favorites" style={{ marginBottom: '20px' }}>
                <FavoriteIcon />
              </IconButton>
              <Divider style={{ margin: '20px 0' }} />
              <Typography variant="h6" style={{ marginBottom: '10px' }}>
                Reviews:
              </Typography>
              <Box sx={{ display: 'flex', overflowX: 'auto', paddingBottom: '20px' }}>
                {product.reviews.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <Box
                      key={index}
                      sx={{
                        minWidth: 300,
                        padding: '10px',
                        marginRight: '10px',
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                        {review.user}:
                      </Typography>
                      <Typography variant="body2">{review.comment}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Rating: {review.rating} / 5
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2">No reviews yet.</Typography>
                )}
              </Box>
            </Box>

            {/* Stores Section */}
            <Box sx={{ flex: 1, marginLeft: '20px' }}>
              <Typography variant="h6" style={{ marginBottom: '10px' }}>
                Available in Stores:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {product.availableInStores.length > 0 ? (
                  product.availableInStores.map((store, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding: '10px',
                        marginBottom: '10px',
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                        {store.name}
                      </Typography>
                      <Typography variant="body2">{store.location}</Typography>
                      <Typography variant="body2">
                        <strong>Stock:</strong> {store.stock}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Distance:</strong> {store.distance}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2">Not available in any stores.</Typography>
                )}
              </Box>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProductDetails;
