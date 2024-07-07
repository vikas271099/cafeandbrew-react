import React from 'react';
import './App.css';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import FeaturedMenu from './components/FeaturedMenu';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import ContactUs from './components/Contact-us';

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
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: "rgb(255 244 209)" }}>
          <h2>About Us</h2>
          <p>We are a cozy cafe serving the best coffee and delightful meals in town.</p>
        </div>
      </section>
      <section id="contact">
          <ContactUs/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
