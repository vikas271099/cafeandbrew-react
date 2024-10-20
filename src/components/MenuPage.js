import React, { useState } from 'react';
import MenuItems from './MenuItems';
import './MenuPage.css';


const menuCategories = [
  { key: 'friesandsides', value: "FRIES	&	SIDE'S" },
  { key: 'burgers', value: 'BURGERS' },
  { key: 'sandwiches', value: 'SANDWICHES' },
  { key: 'pastas', value: 'PASTAS' },
  { key: 'sub', value: 'SUB' },
  { key: 'salad', value: 'SALAD' },
  { key: 'maggie', value: 'MAGGIE' },
  { key: 'wraps', value: 'WRAPS' },
  { key: 'chinese', value: 'CHINESE' },
  { key: 'soup', value: 'SOUP' },
  { key: 'pizza', value: 'PIZZAS' },
  { key: 'teacoffee', value: 'TEE/COFFEE' },
  { key: 'shakes', value: 'SHAKES' },
  { key: 'mocktails', value: 'MOCKTAILS' },
  { key: 'colddrink', value: 'COLD DRINKS' }
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
    <div className="menu-page-bg" >
      <div className="menu-page" >
      <header className="menu-header">
        <h1>Food Menu</h1>
      </header>
      <div className="menu-container">
        <nav className="menu-nav" >
          <ul>
            {menuCategories.map((category) => (
              <li key={category.key} className={category.key === selectedCategory ? 'menu-nav-selected' : ''}>
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
    </div>
  );
};

export default MenuPage;
