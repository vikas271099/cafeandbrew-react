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
    starters: {
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
    wings: {
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
    salads_soups: {
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
    lunch_specials: {
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
    burgers: {
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
    bbq_platters_ribs: {
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
    fire_grilled_favorites:{
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
    sandwiches: {
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
    sides: {
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
    kids_meal: {
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
    desserts: {
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
  };

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
