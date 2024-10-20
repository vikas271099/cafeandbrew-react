import * as React from "react";
import "./MenuItems.css";
 
const sandwichImage = require("../../src/images/Sandwichbg.jpg");
const MenuItems = ({ categoryKey, selectedCategoryValue }) => {
  const menuItems = {
    friesandsides: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Cheesy Dip", FullPrice: "20/-", HalfPrice: "" },
        { name: "Spicy Dip", FullPrice: "20/-", HalfPrice: "" },
        { name: "Salted Fries", FullPrice: "70/-", HalfPrice: "" },
        { name: "Masala Fries", FullPrice: "70/-", HalfPrice: "" },
        { name: "Peri Peri Fries", FullPrice: "80/-", HalfPrice: "" },
        { name: "Garlic Bread", FullPrice: "80/-", HalfPrice: "" },
        { name: "Stuff Garlic Bread", FullPrice: "120/-", HalfPrice: "" },
        { name: "Cheese Finger", FullPrice: "200/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "FRIES	&	SIDE'S",
    },
    burgers: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Veg Burger", FullPrice: "39/-", HalfPrice: "" },
        { name: "Alloo Tikki Burger", FullPrice: "49/-", HalfPrice: "" },
        { name: "Lays Burger", FullPrice: "55/-", HalfPrice: "" },
        { name: "Cheesy Burger", FullPrice: "65/-", HalfPrice: "" },
        { name: "Tandoori Burger", FullPrice: "70/-", HalfPrice: "" },
        { name: "Paneer Burger", FullPrice: "80/-", HalfPrice: "" },
        { name: "B&B's Special Burger", FullPrice: "99/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "BURGERS",
    },
    sandwiches: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        {
          name: "Cold Sandwich",
          FullPrice: "70/-",
          HalfPrice: "",
        },
        {
          name: "Grilled Tandoori Sandwich",
          FullPrice: "80/-",
          HalfPrice: "",
        },
        {
          name: "Spicy Sandwich",
          FullPrice: "80/-",
          HalfPrice: "",
        },
        {
          name: "Veg. Grilled Sandwich",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Veg. Grilled Cheese Sandwich",
          FullPrice: "110/-",
          HalfPrice: "",
        },
        {
          name: "Grilled Paneer Sandwich",
          FullPrice: "120/-",
          HalfPrice: "",
        },
      ],
      BGImage: sandwichImage,
      value: "SANDWICHES",
    },
    pastas: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        {
          name: "Red Sauce Pasta",
          FullPrice: "120/-",
          HalfPrice: "",
        },
        {
          name: "White Sauce Pasta",
          FullPrice: "120/-",
          HalfPrice: "",
        },
        {
          name: "Pink Sauce Pasta",
          FullPrice: "120/-",
          HalfPrice: "",
        },
      ],
      BGImage: sandwichImage,
      value: "PASTAS",
    },
    sub: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Veg. Sub", FullPrice: "120/-", HalfPrice: "" },
        { name: "Tikki Sub", FullPrice: "140/-", HalfPrice: "" },
        { name: "Paneer Sub", FullPrice: "150/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "SUB",
    },
    salad: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Boiled Veg. Salad", FullPrice: "80/-", HalfPrice: "" },
        { name: "Kimchi Salad", FullPrice: "80/-", HalfPrice: "" },
        { name: "Korean Salad", FullPrice: "90/-", HalfPrice: "" },
        { name: "Russian Salad", FullPrice: "90/-", HalfPrice: "" },
        { name: "Single Tikki Salad", FullPrice: "100/-", HalfPrice: "" },
        { name: "Double Tikki Salad", FullPrice: "120/-", HalfPrice: "" },
        { name: "Paneer Veg. Salad", FullPrice: "100/-", HalfPrice: "" },
        { name: "Gym Diet", FullPrice: "---", HalfPrice: "" },
        {
          name: "Cucumber Salad white & Red",
          FullPrice: "100/-",
          HalfPrice: "",
        },
      ],
      BGImage: sandwichImage,
      value: "SALAD",
    },
    maggie: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Plain Maggie", FullPrice: "29/-", HalfPrice: "" },
        { name: "Spicy Maggie", FullPrice: "39/-", HalfPrice: "" },
        { name: "Veg Maggie", FullPrice: "49/-", HalfPrice: "" },
        { name: "Cheesy Maggie", FullPrice: "59/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "MAGGIE",
    },
    wraps: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Veg. Wrap", FullPrice: "80/-", HalfPrice: "" },
        { name: "Veg Tikki Wrap", FullPrice: "100/-", HalfPrice: "" },
        { name: "Paneer Wrap", FullPrice: "120/-", HalfPrice: "" },
        { name: "Chaap Wrap", FullPrice: "120/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "WRAPS",
    },
    chinese: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Veg Fried Rice", FullPrice: "80/-", HalfPrice: "" },
        { name: "Veg Noodles", FullPrice: "80/-", HalfPrice: "" },
        { name: "Chilly Garlic Noodles", FullPrice: "90/-", HalfPrice: "" },
        { name: "Hakka Noodles", FullPrice: "100/-", HalfPrice: "" },
        { name: "Paneer Fried Rice", FullPrice: "100/-", HalfPrice: "" },
        { name: "Chilly Patato", FullPrice: "100/-", HalfPrice: "" },
        { name: "Veg Cheese Roll", FullPrice: "100/-", HalfPrice: "" },
        { name: "Spring Roll", FullPrice: "100/-", HalfPrice: "" },
        { name: "Singapuri Noodles", FullPrice: "120/-", HalfPrice: "" },
        { name: "Paneer Noodles", FullPrice: "120/-", HalfPrice: "" },
        { name: "Honey Chilly Patato", FullPrice: "120/-", HalfPrice: "" },
        { name: "Cheese Bellpapper Roll", FullPrice: "120/-", HalfPrice: "" },
        { name: "Manchurian (Dry/Gravy)", FullPrice: "130/-", HalfPrice: "" },
        {
          name: "Cheese Chilly (Dry/Gravy)",
          FullPrice: "150/-",
          HalfPrice: "",
        },
        { name: "Honey Chilly Cauliflower", FullPrice: "150/-", HalfPrice: "" },
        { name: "Cheese Corn Roll", FullPrice: "150/-", HalfPrice: "" },
        { name: "KFC Chaap", FullPrice: "150/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "CHINESE",
    },
    soup: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Veg. Soup", FullPrice: "40/-", HalfPrice: "" },
        { name: "Sweet Corn Soup", FullPrice: "50/-", HalfPrice: "" },
        { name: "Hot & Saur Soup", FullPrice: "50/-", HalfPrice: "" },
        { name: "Lemon Soriander Soup", FullPrice: "50/-", HalfPrice: "" },
        { name: "Tomato Soup", FullPrice: "60/-", HalfPrice: "" },
        { name: "Mushroom Soup", FullPrice: "60/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "SOUP",
    },
    pizza: {
      items: [
        { name: "", FullPrice: "Regular", HalfPrice: "" },
        { name: "Veg Burger", FullPrice: "59/-", HalfPrice: "" },
        { name: "Double Veg Burger", FullPrice: "69/-", HalfPrice: "" },
        { name: "Cream Burger", FullPrice: "75/-", HalfPrice: "" },
        { name: "Cheese Burger", FullPrice: "79/-", HalfPrice: "" },
        { name: "Double Cheese Burger", FullPrice: "89/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "PIZZAS",
    },
    teacoffee: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        { name: "Tea", FullPrice: "20/-", HalfPrice: "" },
        { name: "Masala Tea", FullPrice: "30/-", HalfPrice: "" },
        { name: "Green Tea", FullPrice: "35/-", HalfPrice: "" },
        { name: "Coffee", FullPrice: "40/-", HalfPrice: "" },
        { name: "Cold Coffee", FullPrice: "50/-", HalfPrice: "" },
      ],
      BGImage: sandwichImage,
      value: "TEE/COFFEE",
    },
    shakes: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        {
          name: "Mix Juice",
          FullPrice: "70/-",
          HalfPrice: "",
        },
        {
          name: "Butter Scotch Shake",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Strawberry Shake",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Chocolate Shake",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Vanilla Shake",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Oreo Shake",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Mango Shake",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Banana Shake",
          FullPrice: "90/-",
          HalfPrice: "",
        },
      ],
      BGImage: sandwichImage,
      value: "SHAKES",
    },
    mocktails: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        {
          name: "Fresh Lime Soda Sweet & Salt",
          FullPrice: "50/-",
          HalfPrice: "",
        },
        {
          name: "Watermelon Punch",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Blue Lagoon",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Virgin Mojito",
          FullPrice: "90/-",
          HalfPrice: "",
        },
        {
          name: "Mint Mojito",
          FullPrice: "90/-",
          HalfPrice: "",
        },
      ],
      BGImage: sandwichImage,
      value: "MOCKTAILS",
    },
    colddrink: {
      items: [
        { name: "", FullPrice: "", HalfPrice: "" },
        {
          name: "Fruit Drinks",
          FullPrice: "MRP",
          HalfPrice: "",
        },
        {
          name: "Juice Can",
          FullPrice: "MRP",
          HalfPrice: "",
        },
        {
          name: "Mineral Water",
          FullPrice: "MRP",
          HalfPrice: "",
        },
      ],
      BGImage: sandwichImage,
      value: "COLD DRINKS",
    },
  };

  const items = menuItems[categoryKey].items;
  const src = menuItems[categoryKey].BGImage;

  if (!items) {
    return <p>No items available for this category.</p>;
  }

  return (
    <>
      <div className="isMobileView">
        {Object.keys(menuItems)?.map((x) => {
          return (
            <div
              key={x}
              style={{
                marginTop: "25px",
                backgroundImage: `url(${menuItems[x].BGImage})`,
                backgroundSize: "cover",
              }}
            >
              <div className="menu-items" id={x}>
                <h3>{menuItems[x].value?.replace(/_/g, " ")}</h3>
                <ul>
                  {menuItems[x].items?.map((item, index) => (
                    <li key={index}>
                      <span className="item-name">{item.name}</span>
                      <div className="item-price-gap">
                        <span
                          className={
                            index === 0 ? "item-price-index0" : "item-price"
                          }
                        >
                          {item.HalfPrice}
                        </span>
                        <span
                          className={
                            index === 0 ? "item-price-index0" : "item-price"
                          }
                        >
                          {item.FullPrice}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="isDesktopView">
        <div
          key={categoryKey}
          style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
        >
          <div className="menu-items">
            <h3>{selectedCategoryValue.replace(/_/g, " ")}</h3>
            <ul>
              {items?.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="item-name">{item.name}</span>
                    <div className="item-price-gap">
                      <span
                        className={
                          index === 0 ? "item-price-index0" : "item-price"
                        }
                      >
                        {item.HalfPrice}
                      </span>
                      <span
                        className={
                          index === 0 ? "item-price-index0" : "item-price"
                        }
                      >
                        {item.FullPrice}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
