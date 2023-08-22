import React from 'react';
import './contactUs.css';


/* 
The ContactUs component is defined to render the contact information section of the website.
Social media links are provided using anchor tags (<a>) with corresponding URLs. 
*/

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