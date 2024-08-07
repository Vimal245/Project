    import React from 'react';
    import './CategoryCard.css'; // Make sure this path is correct

    const CategoryCard = ({ title, imageUrl }) => {
    return (
        <div className='category-card'>
        <img src={imageUrl} alt={title} className='category-card-img' />
        <h3 className='category-card-title'>{title}</h3>
        </div>
    );
    };

    export default CategoryCard;
