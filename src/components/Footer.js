// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">© {year} Books and Brew. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
