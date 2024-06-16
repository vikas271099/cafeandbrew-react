import React from 'react';
import './MenuPage.css';
import MenuItem from './MenuItem';

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


const menuItems = [
  { category: 'featured_items', title: 'Nutty Chicken Salad', description: 'Mixed greens, feta cheese, candied pecans, dried cranberries, red onions, strawberries, topped with grilled or fried chicken and honey mustard dressing.' },
  { category: 'starters', title: 'Chicken Caesar Salad', description: 'Grilled garlic herb chicken breast, romaine, cornbread croutons, and Caesar dressing.', calories: '850 cal' },
  { category: 'featured_items', title: 'Bones Salad', description: 'Mixed green, red onions, tomatoes, cheddar-jack cheese and cornbread croutons.' },
  { category: 'featured_items', title: 'Stacked Baked Potato & Salad', description: 'Loaded baked potato topped with house smoked, hand pulled pork or Texas style beef brisket, cheddar jack cheese, bacon, sour cream, green onions, served with garlic bread, and choice of Garden Greens or Caesar side salad.' },
  // Add more items as needed
];

const MenuPage = () => {
  const ref = React.useRef("featured_items");

  const [currentCategorykey, setCurrentCategorykey] = React.useState("featured_items");
  const [currentCategoryValue, setCurrentCategoryValue] = React.useState("Featured Items");

  function updateCategory(category) {
    setCurrentCategorykey(category.key)
    setCurrentCategoryValue(category.value)
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className="menu-page">
      <aside className="sidebar">
        <h2>The Menu</h2>
        <ul className="menu-categories">
          {menuCategories.map((category, index) => (
            <li key={index} onClick={() => updateCategory(category)} className={currentCategorykey ==category?.key ? 'activeMenu' : ''}>{category.value}</li>
          ))}
        </ul>
      </aside>
      <main className="menu-content" id="menu-content" ref={ref}>
        <h2>{currentCategoryValue}</h2>
        <div className="menu-items">
          {menuItems
            .filter(item => item.category === currentCategorykey)
            .map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default MenuPage;

