import React, { useState } from 'react';
import MenuItems from './MenuItems';
import './MenuPage.css';

const menuCategories = [
  { key: 'featured_items', value: 'Featured Items' },
  { key: 'starters', value: 'Starters' },
  { key: 'wings', value: 'Wings' },
  { key: 'salads_soups', value: 'Salads & Soups' },
  { key: 'lunch_specials', value: 'Lunch Specials' },
  { key: 'burgers', value: 'Burgers' },
  { key: 'bbq_platters_ribs', value: 'BBQ Platters & Ribs' },
  { key: 'fire_grilled_favorites', value: 'Fire-Grilled Favorites' },
  { key: 'sandwiches', value: 'Sandwiches' },
  { key: 'sides', value: 'Sides' },
  { key: 'kids_meal', value: 'Kid’s Meal' },
  { key: 'desserts', value: 'Desserts' }
];

const MenuPage = () => {
  const ref = React.useRef();
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].key);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState(menuCategories[0].value);

  function updateCategory(category) {
    setSelectedCategory(category.key)
    setSelectedCategoryValue(category.value)
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="menu-page" >
      <header className="menu-header">
        <h1>Food Menu</h1>
      </header>
      <div className="menu-container">
        <nav className="menu-nav" >
          <ul>
            {menuCategories.map((category) => (
              <li key={category.key}>
                <button onClick={() => updateCategory(category)}>
                  {category.value}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-content" ref={ref}>
          <MenuItems categoryKey={selectedCategory} selectedCategoryValue={selectedCategoryValue}/>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
