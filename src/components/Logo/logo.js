import React from 'react';
import './logo.css';

/*
The Logo component represents the logo section of the website.
It is a functional component that renders a div element with the CSS class logo.
Inside the logo div, there is an anchor (<a>) element with a placeholder link ("#") and the text "Go My Code".
*/

const Logo = () => {
  return (
    <div className="logo">
      <a href="#">Go My Code</a>
    </div>
  );
}

export default Logo;