import React from 'react';
import './App.css';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import ContactUs from './components/Contact-us';
import MenuCombo from './components/MenuCombos';

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
      <section id='combo'>
        <MenuCombo/>
      </section>
      {/* <section id="about">
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: "#fffcf1" }}>
          <h2>About Us</h2>
          <p>We are a cozy cafe serving the best coffee and delightful meals in town.</p>
        </div>
      </section>
      <section id="contact">
          <ContactUs/>
      </section> */}
      <Footer />
    </div>
  );
}

export default App;
