import React from 'react';
import './layout.css';
import Sidebar from '../SideBar/sideBar';


/*
The Layout component represents the overall layout of the website.
It is a functional component that receives props as its parameter.
The component renders a div element with the CSS class container.
The props.children are rendered inside the container, representing the main content of the website.
The Sidebar component is also rendered inside the container, providing a sidebar section.
After the container, a footer element with the CSS class footer is rendered, containing a copyright notice.
*/

// Layout component
const Layout = (props) => {
  return (
    <>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <footer className="footer">
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
    </>
  );
}

export default Layout;