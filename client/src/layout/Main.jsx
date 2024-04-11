import React from 'react'
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import {Outlet} from 'react-router-dom'
 
const Main = () => {
  return (
    <div className="bg-base-200 container p-5 ">
      <Navbar />
      <div className="p-16 container min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main
