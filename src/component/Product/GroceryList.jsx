import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Card, CardContent, Typography, Grid, TextField } from '@mui/material';

// Sample product data - replace with actual data source
const products = [
  {
    id: 'sc1',
    adminId: 'monu',
    image: 'https://www.bigbasket.com/media/uploads/p/l/10000033_25-fresho-banana-yelakki.jpg',
    product_name: 'Banana - Yelakki',
    quantity: 1,
    weight: '500 g',
    price: 48,
    discount: 10,
    rating: 4.5,
    description: 'Fresh, tiny small sized, directly procured from the farm, this variety is called Yelakki in Bangalore and Elaichi in Mumbai. Despite its small size, they are naturally flavoured, aromatic and sweeter compared to regular bananas. Yelakki bananas are around 3- 4 inches long, and contain a thinner skin and better shelf life than Robusta bananas.'
  },
  {
    id: 'sc2',
    adminId: 'monu',
    image: 'https://www.bigbasket.com/media/uploads/p/l/1222182_1-fresho-orange-nagpur-regular.jpg',
    product_name: 'Orange - Nagpur, Regular',
    quantity: 1,
    price: 140,
    weight: '2 kg',
    discount: 10,
    rating: 4.6,
    description: 'Freshly picked directly from Nagpur farms, Fresho Nagpur oranges are sweet and bursting with juice. These are simple to peel and section. Treat your taste buds with this mouth-watering fruit that is sweet and has a distinctive flavour.'
  },
  {
    id: 'sc3',
    adminId: 'monu',
    image: 'https://www.bigbasket.com/media/uploads/p/l/10000025_27-fresho-banana-robusta.jpg',
    product_name: 'Banana - Robusta',
    quantity: 1,
    price: 493,
    discount: 10,
    weight: '1 kg',
    rating: 4.2,
    description: 'Relish the soft, buttery texture of Robusta bananas that are light green and have a great fragrance and taste. The stalks of Robustas are thick and rigid. Fresh fruits are green, which revolve to a bright yellow on ripening and the flesh contains a white - ceramic colour. Fresho Robusta is fine quality, sweet flavoured, mushy and soft bananas.'
  },
  {
    id: 'sc1',
    adminId: 'monu',
    image: 'https://www.bigbasket.com/media/uploads/p/l/10000033_25-fresho-banana-yelakki.jpg',
    product_name: 'Banana - Yelakki',
    quantity: 1,
    weight: '500 g',
    price: 48,
    discount: 10,
    rating: 4.5,
    description: 'Fresh, tiny small sized, directly procured from the farm, this variety is called Yelakki in Bangalore and Elaichi in Mumbai. Despite its small size, they are naturally flavoured, aromatic and sweeter compared to regular bananas. Yelakki bananas are around 3- 4 inches long, and contain a thinner skin and better shelf life than Robusta bananas.'
  },
  {
    id: 'sc2',
    adminId: 'monu',
    image: 'https://www.bigbasket.com/media/uploads/p/l/1222182_1-fresho-orange-nagpur-regular.jpg',
    product_name: 'Orange - Nagpur, Regular',
    quantity: 1,
    price: 140,
    weight: '2 kg',
    discount: 10,
    rating: 4.6,
    description: 'Freshly picked directly from Nagpur farms, Fresho Nagpur oranges are sweet and bursting with juice. These are simple to peel and section. Treat your taste buds with this mouth-watering fruit that is sweet and has a distinctive flavour.'
  },
  {
    id: 'sc3',
    adminId: 'monu',
    image: 'https://www.bigbasket.com/media/uploads/p/l/10000025_27-fresho-banana-robusta.jpg',
    product_name: 'Banana - Robusta',
    quantity: 1,
    price: 493,
    discount: 10,
    weight: '1 kg',
    rating: 4.2,
    description: 'Relish the soft, buttery texture of Robusta bananas that are light green and have a great fragrance and taste. The stalks of Robustas are thick and rigid. Fresh fruits are green, which revolve to a bright yellow on ripening and the flesh contains a white - ceramic colour. Fresho Robusta is fine quality, sweet flavoured, mushy and soft bananas.'
  },
];

const themeColors = {
  primary: '#6482AD',
  secondary: '#3362a6',
  text: '#1254b3',
  secondaryText: '#6482AD',
};

const GroceryList = () => {
  // Example function to handle search
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className='products-list' style={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: themeColors.text }}>Products List</h1>
        
        <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <TextField
            label="Search Products"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
            onChange={handleSearch}
          />
          
          <Grid container spacing={3}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                  <img src={product.image} alt={product.product_name} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                  <CardContent>
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold', color: themeColors.text }}>
                      {product.product_name}
                    </Typography>
                    <Typography variant="body2" style={{ margin: '10px 0', color: themeColors.secondaryText }}>
                      Weight: {product.weight}
                    </Typography>
                    <Typography variant="h6" style={{ color: themeColors.primary }}>
                      ₹{product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" style={{ color: themeColors.secondary }}>
                      Discount: {product.discount}%
                    </Typography>
                    <Typography variant="body2" style={{ margin: '10px 0', color: themeColors.primary }}>
                      Rating: {product.rating} / 5
                    </Typography>
                    <Typography variant="body2" style={{ color: themeColors.secondaryText }}>
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroceryList;
