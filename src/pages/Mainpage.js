import React from 'react';
import Mainheader from '../mainPageComponents/Mainheader';
import Sidebar from '../mainPageComponents/Sidebar';
import { Outlet } from 'react-router-dom';


const Mainpage = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '60px',
    display: 'flex',
  };

  const sidebarStyle = {
    width: '250px',
  };

  const contentContainerStyle = {
    flex: '1',
    marginLeft: '250px',
    padding: '20px',
  };

  return (
    <div>
      <Mainheader />
      <div style={containerStyle}>
        <Sidebar style={sidebarStyle} />
        <div style={contentContainerStyle}>
          <Outlet /> {/* Renders the nested routes */}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
