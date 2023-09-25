import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer">
    <div className="container text-center">
    <div className="row">
    <div className="col-md-6 col-lg-5 col-12 ft-1">
    <div className="footer-icons">
    <Link to='https://www.facebook.com/'><i class="fab fa-facebook"></i></Link>
       <Link to='https://www.twitter.com/'><i class="fab fa-twitter"></i></Link>
       <Link to='https://www.instagram.com/'><i class="fab fa-square-instagram"></i></Link>
       <Link to='https://www..linkedin.com/'><i class="fab fa-linkedin-in"></i></Link>
       </div>
    </div>
    <div className="col-md-6 col-lg-3 col-12 ft-2">
    <h5>Quick Links</h5>
    <ul>
      <li className="nav-item"> 
      <a className="" href="/">Home</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/login">Login</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/register1">Register</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/login">Log Out</a>
      </li>
    </ul>
    </div>
    <div className="col-md-6 col-lg-4 col-12 ft-3">
     <h4>Contact Info</h4>
     <p><i class="fa-solid fa-phone-volume"></i> +91 9345854383</p><br></br>
     <p><i class="fa-solid fa-envelope"></i>aquatrack7@gmail.com</p><br></br>
     <p><i class="fa-sharp fa-solid fa-paper-plane"></i>Coimbatore, India.</p>
    </div>
    </div>
    </div>
    <div className='con'>
        <p>Hydration and Wellness at your fingertips!</p>
    </div>
    <div className='fa'>
        <Link to="/faq">FAQS</Link>
    </div>
   
    <div class="bottom-bar">
    <p>&copy;2023 your company . All rights reserved</p>
   </div>
    </div>
  )
}
