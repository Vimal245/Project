import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, IconButton, Divider, Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

// Sample related products data
const relatedProducts = [
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    image: '/n7.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    image: '/n8.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 39.99,
    image: '/n9.jpg',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 59.99,
    image: '/n10.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 25.99,
    image: '/n11.jpg',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 35.99,
    image: '/n12.jpg',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    // Navigate to the payment page
    navigate('/payment', { state: { product, quantity } });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleStoreClick = (store) => {
    setSelectedStore(store);
    // You can add more logic here, such as navigating to a map or detailed store view
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#F5EDED' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
        {/* Left Side: Small Images */}
        <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
          {product.additionalImages.map((img, index) => (
            <Card key={index} sx={{ marginBottom: '10px', maxWidth: 100 }}>
              <CardMedia component="img" height="100" image={img} alt={`Additional ${index}`} />
            </Card>
          ))}
        </Box>

        {/* Right Side: Product Details and Related Products */}
        <Box sx={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* Product Details */}
            <Box sx={{ flex: 2 }}>
              <Card sx={{ maxWidth: 600, marginBottom: '20px' }}>
                <CardMedia component="img" height="400" image={product.image} alt={product.name} />
                <CardContent sx={{ backgroundColor: '#A8C5E1', color: '#054788' }}>
                  <Typography gutterBottom variant="h4" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="h6">
                    ₹{product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {product.description}
                  </Typography>
                  <Typography variant="body2">
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <TextField
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  inputProps={{ min: 1 }}
                  sx={{ maxWidth: 100 }}
                />
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleAddToCart}
                  style={{ backgroundColor: '#054788' }}
                >
                  Add to Cart
                </Button>
                <Button variant="contained" color="secondary" size="large" onClick={handleBuyNow}>
                  Buy Now
                </Button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </Box>
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

            {/* Related Products */}
            <Box sx={{ flex: 2, marginLeft: '20px' }}>
              <Typography variant="h6" style={{ marginBottom: '10px' }}>
                Related Products:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {relatedProducts.map((relatedProduct) => (
                  <Box key={relatedProduct.id} sx={{ width: 'calc(33% - 20px)', position: 'relative' }}>
                    <Card sx={{ backgroundColor: '#A8C5E1', color: '#054788' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={relatedProduct.image}
                        alt={relatedProduct.name}
                      />
                      <CardContent>
                        <Typography variant="h6" noWrap>
                          {relatedProduct.name}
                        </Typography>
                        <Typography variant="body2">₹{relatedProduct.price.toFixed(2)}</Typography>
                      </CardContent>
                      <Button
                        component={Link}
                        to={`/product/${relatedProduct.id}`}
                        size="small"
                        sx={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '10px',
                          backgroundColor: '#054788',
                          color: '#fff',
                        }}
                      >
                        View
                      </Button>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>
          </div>
          <Divider style={{ margin: '20px 0' }} />
          <div>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>
              Available in Stores:
            </Typography>
            <List>
              {product.availableInStores.map((store, index) => (
                <ListItem key={index} button onClick={() => handleStoreClick(store)}>
                  <ListItemText
                    primary={store.name}
                    secondary={`Location: ${store.location}, Stock: ${store.stock}, Distance: ${store.distance}`}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Box>
      </div>
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>Store Details</DialogTitle>
        <DialogContent>
          {selectedStore ? (
            <>
              <Typography variant="body1">
                <strong>Name:</strong> {selectedStore.name}
              </Typography>
              <Typography variant="body1">
                <strong>Location:</strong> {selectedStore.location}
              </Typography>
              <Typography variant="body1">
                <strong>Stock:</strong> {selectedStore.stock}
              </Typography>
              <Typography variant="body1">
                <strong>Distance:</strong> {selectedStore.distance}
              </Typography>
            </>
          ) : (
            <Typography variant="body1">No store selected.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// Dummy addToCart function to be replaced with actual logic
const addToCart = (product, quantity) => {
  console.log(`Added ${quantity} of ${product.name} to cart.`);
};

export default ProductDetails;
