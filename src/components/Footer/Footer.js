import "./footer.css";
import logo from "../assets/logo.png"; // Adjust the path as needed
import React from 'react';
import { FaTelegramPlane, FaInstagram, FaTwitter, FaFacebookF, FaDiscord } from 'react-icons/fa'; // Example social media icons

const Footer = () => {
  return (
    <footer className='app-footer'>
      <div className='footer-container'>
        {/* Left Section: Logo and Social Media Icons */}
        <div className='left-section'>
          <img src={logo} alt='EthAi' className='footer-logo' />
          <div className='social-media'>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <FaTelegramPlane />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <FaFacebookF />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className='social-icon'>
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Right Section: Text, Input, and Button */}
        <div className='right-section'>
          <h1 className='footer-header'>
            “Designed for traders of today, just like you.”
          </h1>
          <div className='email-section'>
            <input 
              type="email" 
              placeholder="What's your work email?" 
              className="search-input"
            />
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
