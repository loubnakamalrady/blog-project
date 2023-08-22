import React from 'react';
import './App.css';
import Home from './containers/Home/home';
import Hero from './components/Hero/hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUS from './containers/ContactUS/contactUs';
import AboutUs from './containers/AboutUs/aboutUs';
import Post from './containers/Post/post';

/* The BrowserRouter, Route, and Routes components are imported from 'react-router-dom' library, indicating the usage of React Router for handling routing in the application.
 The <Router> component wraps the entire application, enabling route handling.
 The <Hero> component is used inside the header section, suggesting the presence of a hero section or banner at the top of the page.
The <Routes> component is used to define the routes of the application.
Each <Route> component represents a specific route and its corresponding component to render when that route is accessed.
The path prop of each <Route> specifies the URL path, and the element prop specifies the component to render for that route.*/

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