import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

/*
The Navbar component represents the navigation bar of the website.
It is a functional component that uses the useState hook to manage the state of the search input.
The component renders a div element with the CSS class navbar.
Inside the navbar, there is an unordered list (navbarMenu) containing navigation links.
The links are created using the NavLink component from react-router-dom, which enables navigation within the application.
The search functionality includes a search input field and a search icon.
The search input field's visibility is controlled by the search state variable.
Clicking on the search icon toggles the visibility of the search input field.
Submitting the search form triggers an alert with the message "Search".
*/

const Navbar = () => {
  const [search, setSearch] = useState(false);

  // Function to handle search form submission
  const submitSearch = (e) => {
    e.preventDefault();
    alert('Search');
  }

  // Function to open the search input
  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? 'searchInput active' : 'searchInput';

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
        </form>
      </div>
    </div>
  );
}

export default Navbar;