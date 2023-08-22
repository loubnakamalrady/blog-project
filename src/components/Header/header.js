import React from 'react';
import './style.css';

/* 
The Header component represents the header section of the website.
The header includes a navigation menu (headerMenu) with links to Home, About Us, and Contact Us pages.
The Links section is a placeholder and can be replaced with actual content or components.
*/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
        <div>
            Links
        </div>
    </header>
   )

 }

export default Header