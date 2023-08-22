import React from 'react';
import Card from '../UI/Card/card';
import Logo from '../Logo/logo';
import Navbar from '../NavBar/navBar';

/*
The Hero component represents the hero section of the website.
It is a functional component that renders a div element.
Inside the div, there is a Card component representing a card container.
The card contains a Logo component and a Navbar component, forming the header section of the website.
*/

const Hero = () => {
  return (
    <div>
      <Card>
        <div style={{ padding: '50px 0' }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
}

export default Hero;