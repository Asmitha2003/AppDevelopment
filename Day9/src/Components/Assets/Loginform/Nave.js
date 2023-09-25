import React from 'react'
import './Nave.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import logo from '../Loginform/logo.webp'

export default function Nave() {
    const navRef = useRef();

    const showNavbar = ()=> 
    {
       navRef.current.classList.toggle("responsive_nav");
    };
  
   return ( 
    <div className="body67">
    <header>
    <div className='logo'>
            <img src={logo} alt='lo' width="40px" height="40px" />
        </div>
    <h3 className='aqua'>AquaTrack</h3>
    <nav ref={navRef}>
    <Link to ="/">Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='/register1'>Register</Link>
    <Link to='/login'>Logout</Link>
    <Link to='/about'>About</Link>
 
    
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
    </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars/>
    </button>
    </header>
    <div>
    <input type='checkbox' id="check"/>
          <label htmlFor="check">
          <div id='menubar'><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
          <div className="sidebar">
            <ul> 
          <li><Link to ="/today">Today</Link></li>
          <li><Link to="/graph">History</Link></li>
          <li><Link to="/cal">Suggestion</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>
    </div>
    
    
    </div>
  )
}