import React from 'react';
import './App.css';
import Home from './containers/Home/home';
import Hero from './components/Hero/hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUS from './containers/ContactUS/contactUs';
import AboutUs from './containers/AboutUs/aboutUs';
import Post from './containers/Post/post';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Hero />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUS />} />
            <Route path="/post/:slug" element={<Post />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;