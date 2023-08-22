import React from 'react';
import './contactUs.css';


const ContactUs = (props) => {
  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <p className="description">
        Got a question or suggestion? Feel free to reach out to us. We'd love to hear from you and
        engage in meaningful conversations.
      </p>
      <div className="socialMediaLinks">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <hr/>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <hr/>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <hr/>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </div>
    </div>
  );
};

export default ContactUs;