import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ProductList = () => {
  const { category } = useParams();

  // Example product data - replace with actual data source
  const products = [
    { id: 1, name: 'Product 1', category: 'Groceries' },
    { id: 2, name: 'Product 2', category: 'Fashion' },
    // Add more products here
  ];

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className='prod' style={{ backgroundColor: '#F5EDED', minHeight: '100vh' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Products in {category}</h1>
      <div className='products-container' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
              {product.name}
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
