import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';
import blog from './blogImages/blogging.jpg' 

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Home />
        <ContactUS/>
        <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us"  component={ContactUS}/>
        <Route path="/post/:slug" component={Post} />
        </Routes>
        <p>tss</p>

        
      </div>
    </Router>
    
  );
}

export default App;