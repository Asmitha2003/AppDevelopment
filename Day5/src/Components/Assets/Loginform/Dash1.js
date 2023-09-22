import React,{useState} from 'react'
import menu_icon from '../Loginform/icons8-hamburger-menu-30.png';
import './Dash1.css';

export default function Dash1({click}) {
      return (
    <div>
       <div className='dashboardi'>
            <img src={menu_icon} alt='menu' onClick={click}/>
          </div>
       </div>
  )
}