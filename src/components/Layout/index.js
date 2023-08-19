import React from 'react';
import './style.css';
import Sidebar from '../SideBar';

// Layout component
const Layout = (props) => {
  return (
    <>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <div>
        <h1>Blog Project Footer</h1>
      </div>
    </>
  );
}

export default Layout;