import * as React from 'react';
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
      value: "Featured Items"
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
      value: "Starters"
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
       value: "Wings"
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
       value: "Salad and Soups"
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
      value: "Lunch Specials"
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
      value: 'Burgers'
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
      value: 'BBQ Platters & Ribs'
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
      value: 'Fire-Grilled Favorites'
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
      value: 'Sandwiches'
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
      value: 'Sides'
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
       value: 'Kid’s Meal'
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
       value: 'Desserts'
    },
  };

  const items = menuItems[categoryKey].items;
  const src = menuItems[categoryKey].BGImage;

  if (!items) {
    return <p>No items available for this category.</p>;
  }

  return (

    <>
      <div className='isMobileView'>
      {Object.keys(menuItems)?.map((x) => {
        return(
          <div key={x} style={{ backgroundImage: `url(${menuItems[x].BGImage})`, backgroundSize: "cover" }}>
            <div className="menu-items" id={x}>
        <h3>{menuItems[x].value?.replace(/_/g, ' ')}</h3>
      <ul>
        {menuItems[x].items?.map((item, index) => (
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
        )
      })}
       </div >
      <div className='isDesktopView'>
      <div key={categoryKey} style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}>
      <div className="menu-items" >
        <h3>{selectedCategoryValue.replace(/_/g, ' ')}</h3>
          <ul>
            {items?.map((item, index)=>{
               return(
                <li key={index}>
                  <span className="item-name" >{item.name}</span>
                  <div className='item-price-gap'>
                    <span className={index == 0 ? "item-price-index0" : "item-price"}>{item.HalfPrice}</span>
                  <span className={index == 0 ? "item-price-index0" : "item-price"}>{item.FullPrice}</span>
                    </div>
                  </li>
                  )
            })}

      </ul>
          </div>
          </div>
        </div>
        </>
        
  );
};

export default MenuItems;
