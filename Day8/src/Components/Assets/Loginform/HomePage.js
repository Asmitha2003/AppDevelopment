import React from 'react'
import './HomePage.css';
import round from '../Loginform/round.png'
import grl from "../Loginform/hero-m-14.png"
import google from '../Loginform/android-download.png'
import apple from '../Loginform/Download_on_the_App_Store_Badge.svg.png'
import drink from '../Loginform/Are-you-as-healthy-as-you-think-iStock-1140193165-1024x838.jpg'
import mac from '../Loginform/mac.png'
import man from '../Loginform/consisten-exercise-helps-anxiety-and-stress-1440x810.jpg'
import bottle from '../Loginform/H0a2e30130b034bca9621ca365b257e7d2.jpg'

import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';
import Footer from './Footer';
function HomePage() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  
  return (
    <>
    
      <div className='welcome'>
      Welcome {username}
      </div>
      <Footer/>
    <div className='wtround'>
      <img src={round} alt='br' width="650px" height="700px"/>
        <div className='wtgirl'>
        <img src={grl} alt='gr' width="500px" height="700px"/>
        </div>
      </div>
     
      <div className='t1'>
      <p>Track your daily </p>
    </div>
    <div className='t2'>
      <p> water intake with AquaTrack</p>
    </div>
    <div className='t3'>
      <p> Achieve your hydration goals with our water tracking app!</p>
      </div>
      <div className='gp'>
        <img src={google} alt='playstore'  width="250px" height="100px"/>
      </div>
      <div className='ap'>
        <img src={apple} alt='playstore'  width="250px" height="100px"/>
      </div>
      <div className='mac'>
        <img src={mac} alt='mplaystore'  width="300px" height="100px"/>
      </div>
      <div className='bglight'>
        <div className='drinking'>
          <img src={drink} alt='water' width="400px" height="400px" />
          <div className='overrec1'>
          <div className="hcon">In the hustle and bustle of modern <br></br> life, <br></br>AquaTrack can help you make<br></br> healthy hydration a habit. <br></br>Remember, it only takes 21 <br></br>days to create a healthy<br></br> hydration habit!</div>
        </div>
        </div>
        <div className='man'>
          <img src={man} alt='water' width="400px" height="400px" />
          <div className='overrec2'>
          <div className="hcon">Activity status of a person<br></br>can affect his/her water <br></br>intake quantity.<br></br>AquaTrack provides suggestion by taking age,weight,activity level and climate into account</div>
        </div>
        </div>
        <div className='bottle'>
          <img src={bottle} alt='glass' width="400px" height="400px" />
          <div className='overrec3'>
          <div className="hcon">By using AquaTrack we can track water consumption with the associated measurements of cups,bottles and glasses</div>
        </div>
        </div>
        <div className="contents">
          The all-around water tracker app that helps you <br></br>
          <br></br>stay hydrated all day, every day!
        </div>
      </div>
     
      </>
     
)
  }

export default HomePage;