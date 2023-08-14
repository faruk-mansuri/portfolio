import React, { useState } from 'react';
import { Navbar, SmallSidebar, Footer } from '../Components';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <SmallSidebar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Navbar toggleSidebar={toggleSidebar} />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
