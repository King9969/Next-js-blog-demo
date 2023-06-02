import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="footer">
          <div data-aos="zoom-in">
      <div className="subscribe">
        <h2>Subscribe to <span className='rohit'>R</span>ohit</h2>
        <p>Get the latest posts delivered right to your email.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email address" className="email-input" />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div className="social-icons">
        <FaFacebook size={30} color="#3b5998" className="footer-icon" />
        <FaTwitter size={30} color="#1DA1F2" className="footer-icon" />
        <FaInstagram size={30} color="#E1306C" className="footer-icon" />
      </div>
      </div>
    </footer>

  );
};

export default Footer;
