// src/ProductList.js

import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import './ProductList.css';

// Sample product data for multiple rows
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: 'n4.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    image: 'n6.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 39.99,
    image: 'f1.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 39.99,
    image: 'f4.jpg',
  },
];

const products2 = [
  {
    id: 5,
    name: 'Product 5',
    price: 49.99,
    image: 'f5.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 59.99,
    image: 'f6.jpg',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 69.99,
    image: 'f7.jpg',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 79.99,
    image: 'f8.jpg',
  },
];

// Add additional product arrays
const products3 = [
  {
    id: 9,
    name: 'Product 9',
    price: 89.99,
    image: 'f9.jpg',
  },
  {
    id: 10,
    name: 'Product 10',
    price: 99.99,
    image: 'f10.jpg',
  },
  {
    id: 11,
    name: 'Product 11',
    price: 109.99,
    image: 'f11.jpg',
  },
  {
    id: 12,
    name: 'Product 12',
    price: 119.99,
    image: 'f12.jpg',
  },
];

const products4 = [
  {
    id: 13,
    name: 'Product 13',
    price: 129.99,
    image: 'f13.jpg',
  },
  {
    id: 14,
    name: 'Product 14',
    price: 139.99,
    image: 'f14.jpg',
  },
  {
    id: 15,
    name: 'Product 15',
    price: 149.99,
    image: 'f15.jpg',
  },
  {
    id: 16,
    name: 'Product 16',
    price: 159.99,
    image: 'f16.jpg',
  },
];

const products5 = [
  {
    id: 17,
    name: 'Product 17',
    price: 169.99,
    image: 'f17.jpg',
  },
  {
    id: 18,
    name: 'Product 18',
    price: 179.99,
    image: 'f18.jpg',
  },
  {
    id: 19,
    name: 'Product 19',
    price: 189.99,
    image: 'f19.jpg',
  },
  {
    id: 20,
    name: 'Product 20',
    price: 199.99,
    image: 'f20.jpg',
  },
];

const products6 = [
  {
    id: 21,
    name: 'Product 21',
    price: 209.99,
    image: 'f21.jpg',
  },
  {
    id: 22,
    name: 'Product 22',
    price: 219.99,
    image: 'f22.jpg',
  },
  {
    id: 23,
    name: 'Product 23',
    price: 229.99,
    image: 'f23.jpg',
  },
  {
    id: 24,
    name: 'Product 24',
    price: 239.99,
    image: 'f24.jpg',
  },
];

const products7 = [
  {
    id: 25,
    name: 'Product 25',
    price: 249.99,
    image: 'f25.jpg',
  },
  {
    id: 26,
    name: 'Product 26',
    price: 259.99,
    image: 'f26.jpg',
  },
  {
    id: 27,
    name: 'Product 27',
    price: 269.99,
    image: 'f27.jpg',
  },
  {
    id: 28,
    name: 'Product 28',
    price: 279.99,
    image: 'f28.jpg',
  },
];

const products8 = [
  {
    id: 29,
    name: 'Product 29',
    price: 289.99,
    image: 'f29.jpg',
  },
  {
    id: 30,
    name: 'Product 30',
    price: 299.99,
    image: 'f30.jpg',
  },
  {
    id: 31,
    name: 'Product 31',
    price: 309.99,
    image: 'f31.jpg',
  },
  {
    id: 32,
    name: 'Product 32',
    price: 319.99,
    image: 'f32.jpg',
  },
];

const ProductList = () => {
  return (
    <div className='prod' style={{ backgroundColor: '#F5EDED', minHeight: '100vh' }}>
      {/* <Navbar /> */}
      <img
        src="/banner.png" // Relative path to the image in the public folder
        alt="Banner"
        style={{ width: '100%', marginBottom: '20px' }}
      />
      {[
        { title: 'Trendy Products', items: products },
        { title: 'Featured Products', items: products2 },
        { title: 'New Arrivals', items: products3 },
        { title: 'Best Sellers', items: products4 },
        { title: 'Discounted Items', items: products5 },
        { title: 'Exclusive Offers', items: products6 },
        { title: 'Seasonal Favorites', items: products7 },
        { title: 'Limited Editions', items: products8 },
      ].map(({ title, items }, index) => (
        <div key={index} style={{ marginTop: '40px' }}>
          <h1 style={{ textAlign: 'center', color:'#4672B1'}}>{title}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {items.map((product) => (
              <Card
                key={product.id}
                sx={{
                  maxWidth: 345,
                  padding: '15px',
                  margin: '10px',
                  backgroundColor: '#9FBFDF',
                  '&:hover': {
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.01)',
                    transition: 'all 0.3s ease-in-out',
                    padding: '20px',
                  },
                }}
              >
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease-in-out',
                      '&:hover': {
                        filter: 'grayscale(0%)',
                      },
                    }}
                    className='product-image' // Add CSS class
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#235CAE">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites" className='favorite-button'>
                      <FavoriteIcon />
                    </IconButton>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
