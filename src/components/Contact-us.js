import React, { useState } from 'react';
import './Contact-us.css';

function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    console.log('Form submitted:', { firstName, email, phoneNumber, message });
  };

  return (
    <div className="Contactuscontainer">
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>info@booksandbrew.com</p>
        <p>+91 769-688-5570</p>
        <p>Sua Road, Gidderbaha - 152101</p>
      </div>
      <div className="form-container">
        <h2>Get in Touch</h2>
        <p>You can reach us anytime</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
                          id="firstName"
                          required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
                      <input
                          required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label required htmlFor="phoneNumber">Phone Number</label>
                      <input
                          required
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>
          By contacting us, you agree to our <a href="https://www.google.com">Terms of service</a> and{' '}
          <a href="https://www.google.com">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;