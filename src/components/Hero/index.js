import React from 'react';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../NavBar';

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