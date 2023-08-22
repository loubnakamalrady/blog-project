import React from 'react';
import './style.css';
import Sidebar from '../SideBar/sideBar';

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