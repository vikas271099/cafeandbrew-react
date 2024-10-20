// src/components/WelcomeSection.js
import React from 'react';
import './WelcomeSection.css';
const logo = require("../images/logo.png")
const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className='logoSection'>
      <img src={logo} />
      </div>
      <h2 className="welcome-title">Books and Brew</h2>
      <p className="welcome-text">Eat, Read, Relax, Repeat</p>
    </section>
  );
};

export default WelcomeSection;
