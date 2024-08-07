import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import CategoryCard from '../Product/Category/CategoryCard';

const ProductCategory = () => {
  const categories = [
    { title: 'Groceries', imageUrl: '/grocery.png' },
    { title: 'Fashion', imageUrl: '/fashion.png' },
    { title: 'Stationary', imageUrl: '/stationary.png' },
    { title: 'Books', imageUrl: '/books.png' },
  ];

  return (
    <div className='prod' style={{ backgroundColor: '#F5EDED', minHeight: '100vh' }}>
      <Navbar />
      <img
        src="/banner.png"
        alt="Banner"
        style={{ width: '100%', marginBottom: '20px', marginTop: '80px' }}
      />
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Categories</h1>
      <div className='categories-container' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} imageUrl={category.imageUrl} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategory;
