import React from 'react';
import './App.css';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import FeaturedMenu from './components/FeaturedMenu';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home" className='app-welcome-section'>
        <WelcomeSection />
      </section>
      <section id="menu">
      <MenuPage/>
      </section>
      <section id="about">
        {/* Add About Us content here */}
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#fff' }}>
          <h2>About Us</h2>
          <p>We are a cozy cafe serving the best coffee and delightful meals in town.</p>
        </div>
      </section>
      <section id="contact">
        {/* Add Contact Us content here */}
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
          <h2>Contact Us</h2>
          <p>Sua Road, Azaad Publications, Gidderbaha</p>
          <p>Email: info@cafeandbrew.com</p>
          <p>Phone: +91 (769) 688-5570</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
