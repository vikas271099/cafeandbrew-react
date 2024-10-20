import React from 'react';
import './Menu.css';
import appetizerImage from '../images/Appetizer.jpg';
import mainCourseImage from '../images/Main Course.jpg'
import dessertImage from '../images/dessert.jpg';

const Menu = () => {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Grilled bread with tomato, garlic, and basil', price: '$6', image: appetizerImage },
        { name: 'Stuffed Mushrooms', description: 'Mushrooms filled with cheese and herbs', price: '$8', image: appetizerImage },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', description: 'Salmon with a lemon butter sauce', price: '$20', image: mainCourseImage },
        { name: 'Steak', description: 'Juicy steak cooked to perfection', price: '$25', image: mainCourseImage },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Cheesecake', description: 'Creamy cheesecake with a graham cracker crust', price: '$7', image: dessertImage },
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center', price: '$8', image: dessertImage },
      ],
    },
  ];

  return (
    <div className="menu">
      {menuItems.map((section) => (
        <div key={section.category} className="menu-section">
          <h2 className="menu-category">{section.category}</h2>
          <div className="menu-items">
            {section.items.map((item) => (
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
        </div>
      ))}
    </div>
  );
};

export default Menu;
