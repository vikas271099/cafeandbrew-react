import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, description, calories }) => {
  return (
    <div className="menu-item">
      <h3>{title}</h3>
      <p>{description}</p>
      {calories && <p className="calories">{calories}</p>}
    </div>
  );
};

export default MenuItem;
