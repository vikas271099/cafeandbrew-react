import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <h1 className="header-title">Books and Brew</h1>
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#menu" onClick={closeMobileMenu}>Menu</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About Us</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact Us</a></li>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
