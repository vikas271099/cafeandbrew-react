import React from 'react';
import './MenuItems.css';

const sandwichImage = require('../../src/images/Sandwichbg.jpg');
const MenuItems = ({ categoryKey, selectedCategoryValue }) => {
  const menuItems = {
    featured_items: {
      items:[
      { name: '', FullPrice: 'Regular' , HalfPrice: '' },
      { name: 'Veg Burger', FullPrice: '59/-' , HalfPrice: '' },
      { name: 'Double Veg Burger', FullPrice: '69/-' , HalfPrice: '' },
      { name: 'Cream Burger', FullPrice: '75/-' , HalfPrice: '' },
      { name: 'Cheese Burger', FullPrice: '79/-' , HalfPrice: '' },
      { name: 'Double Cheese Burger', FullPrice: '89/-' , HalfPrice: '' },
      ],
      BGImage: sandwichImage,
    },
    starters: [
      { name: 'Garlic Bread', price: '$5' },
      { name: 'Bruschetta', price: '$7' },
      { name: 'Garlic Bread', price: '$5' },
      { name: 'Bruschetta', price: '$7' },
      { name: 'Garlic Bread', price: '$5' },
      { name: 'Bruschetta', price: '$7' },
    ],
    wings: [
      { name: 'Buffalo Wings', price: '$12' },
      { name: 'Honey BBQ Wings', price: '$12' },
      { name: 'Buffalo Wings', price: '$12' },
      { name: 'Honey BBQ Wings', price: '$12' },
      { name: 'Buffalo Wings', price: '$12' },
      { name: 'Honey BBQ Wings', price: '$12' },
    ],
    salads_soups: [
      { name: 'Caesar Salad', price: '$10' },
      { name: 'Tomato Soup', price: '$8' },
      { name: 'Caesar Salad', price: '$10' },
      { name: 'Tomato Soup', price: '$8' },
      { name: 'Caesar Salad', price: '$10' },
      { name: 'Tomato Soup', price: '$8' },
    ],
    lunch_specials: [
      { name: 'Grilled Cheese Sandwich', price: '$10' },
      { name: 'Chicken Wrap', price: '$12' },
      { name: 'Grilled Cheese Sandwich', price: '$10' },
      { name: 'Chicken Wrap', price: '$12' },
      { name: 'Grilled Cheese Sandwich', price: '$10' },
      { name: 'Chicken Wrap', price: '$12' },
    ],
    burgers: [
      { name: 'Classic Burger', price: '$10' },
      { name: 'Bacon Burger', price: '$12' },
      { name: 'Classic Burger', price: '$10' },
      { name: 'Bacon Burger', price: '$12' },
      { name: 'Classic Burger', price: '$10' },
      { name: 'Bacon Burger', price: '$12' },
    ],
    bbq_platters_ribs: [
      { name: 'BBQ Ribs', price: '$20' },
      { name: 'Pulled Pork Platter', price: '$18' },
      { name: 'BBQ Ribs', price: '$20' },
      { name: 'Pulled Pork Platter', price: '$18' },
      { name: 'BBQ Ribs', price: '$20' },
      { name: 'Pulled Pork Platter', price: '$18' },
    ],
    fire_grilled_favorites: [
      { name: 'Grilled Salmon', price: '$22' },
      { name: 'Steak', price: '$25' },
      { name: 'Grilled Salmon', price: '$22' },
      { name: 'Steak', price: '$25' },
      { name: 'Grilled Salmon', price: '$22' },
      { name: 'Steak', price: '$25' },
    ],
    sandwiches: [
      { name: 'Turkey Sandwich', price: '$10' },
      { name: 'Ham & Cheese Sandwich', price: '$9' },
      { name: 'Turkey Sandwich', price: '$10' },
      { name: 'Ham & Cheese Sandwich', price: '$9' },
      { name: 'Turkey Sandwich', price: '$10' },
      { name: 'Ham & Cheese Sandwich', price: '$9' },
    ],
    sides: [
      { name: 'French Fries', price: '$5' },
      { name: 'Onion Rings', price: '$6' },
      { name: 'French Fries', price: '$5' },
      { name: 'Onion Rings', price: '$6' },
      { name: 'French Fries', price: '$5' },
      { name: 'Onion Rings', price: '$6' },
    ],
    kids_meal: [
      { name: 'Kids Burger', price: '$7' },
      { name: 'Chicken Nuggets', price: '$6' },
      { name: 'Kids Burger', price: '$7' },
      { name: 'Chicken Nuggets', price: '$6' },
      { name: 'Kids Burger', price: '$7' },
      { name: 'Chicken Nuggets', price: '$6' },
    ],
    desserts: [
      { name: 'Chocolate Cake', price: '$7' },
      { name: 'Ice Cream Sundae', price: '$6' },
      { name: 'Chocolate Cake', price: '$7' },
      { name: 'Ice Cream Sundae', price: '$6' },
      { name: 'Chocolate Cake', price: '$7' },
      { name: 'Ice Cream Sundae', price: '$6' },
    ]
  };

  const ImagesArrauy = {
    sandwiches: sandwichImage,
    sandwiches: sandwichImage,
    sandwiches: sandwichImage,
    sandwiches: sandwichImage,
    sandwiches: sandwichImage,
    sandwiches: sandwichImage,
  }
  const items = menuItems[categoryKey].items;
  const src = menuItems[categoryKey].BGImage;


  if (!items) {
    return <p>No items available for this category.</p>;
  }

  return (

    <div style={{ backgroundImage: `url(${src})`, backgroundSize:"cover" }}>
    <div className="menu-items" >
        <h3>{selectedCategoryValue.replace(/_/g, ' ')}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className="item-name" >{item.name}</span>
            <div className='item-price-gap'>
              <span className={index == 0 ? "item-price-index0" : "item-price"}>{item.HalfPrice}</span>
            <span className={index == 0 ? "item-price-index0" : "item-price"}>{item.FullPrice}</span>
              </div>
          </li>
        ))}
      </ul>
      </div>
      </div>
  );
};

export default MenuItems;
