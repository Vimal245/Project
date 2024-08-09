import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './GroceryList.css'; 

const GroceryList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/grocery');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='products-section' style={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#1254b3' }}>Products List</h1>
        <div className="products-grid" style={{ maxWidth: '1200px', margin: 'auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          {products.map((product) => (
            <div className="product-card" key={product.id} style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-photo">
                  <img src={product.image} alt={product.product_name} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="product-info" style={{ padding: '16px' }}>
                  <h3 style={{ fontWeight: 'bold', color: '#1254b3' }}>{product.product_name}</h3>
                  <p style={{ margin: '10px 0', color: '#6482AD' }}>Weight: {product.weight}</p>
                  <p style={{ color: '#6482AD' }}>₹{product.price.toFixed(2)}</p>
                  <p style={{ color: '#3362a6' }}>Discount: {product.discount}%</p>
                  <p style={{ margin: '10px 0', color: '#1254b3' }}>Rating: {product.rating} / 5</p>
                  <p style={{ color: '#6482AD' }}>{product.description}</p>
                </div>
              </Link>
              <button className="add-to-cart-button" style={{ backgroundColor: '#6482AD', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center' }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroceryList;
