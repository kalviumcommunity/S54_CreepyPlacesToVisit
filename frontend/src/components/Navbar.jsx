import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div className="navbar">
      <div className="left-nav">
      <div className='creepy-travels'>Creepy<span>Travels</span></div>
      </div>
      <div className="right-nav">
        <div className='home'>Home</div>
        <div className='about'>About</div>
        <div className='login'>Login</div>
      </div>
    </div>
    <div>
    </div>
  </div>
  )
};

export default Navbar;
