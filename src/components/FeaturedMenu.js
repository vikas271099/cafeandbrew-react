// src/components/FeaturedMenu.js
import React from 'react';
import './FeaturedMenu.css';
import appetizerImage from '../images/Appetizer.jpg';
import mainCourseImage from '../images/Main Course.jpg';
import dessertImage from '../images/dessert.jpg';

const FeaturedMenu = () => {
  const featuredItems = [
    { name: 'Bruschetta', description: 'Grilled bread with tomato, garlic, and basil', price: '$6', image: appetizerImage },
    { name: 'Grilled Salmon', description: 'Salmon with a lemon butter sauce', price: '$20', image: mainCourseImage },
    { name: 'Cheesecake', description: 'Creamy cheesecake with a graham cracker crust', price: '$7', image: dessertImage },
  ];

  return (
    <section className="featured-menu">
      <h2 className="featured-menu-title">Featured Menu</h2>
      <div className="menu-items">
        {featuredItems.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMenu;
