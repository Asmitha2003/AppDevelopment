import React from 'react'
import './Sidebar.css';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


 function Sidebar() {
    const navRef = useRef();

  const showNavbar = ()=> {
       navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className="body67">
    <header>
    <h3 className='aqua'>AquaTrack</h3>
    <nav ref={navRef}>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Logout</Link>
    
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
    </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars/>
    </button>
    </header>
      </div>

  )
}
export default Sidebar;