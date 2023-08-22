import React from 'react';
import Card from '../UI/Card/card';
import Logo from '../Logo/logo';
import Navbar from '../NavBar/navBar';

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