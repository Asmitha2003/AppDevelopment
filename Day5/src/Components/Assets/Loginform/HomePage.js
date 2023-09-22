import React from 'react'
import './HomePage.css';
import Sidebar from './Sidebar';
import Dash1 from './Dash1';
import Dash2 from './Dash2';
import { useState } from 'react';
import Footer from './Footer';
import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';
function HomePage() {
  const[open,setOpen]=useState(false);
  const handleClick=()=>{
    setOpen(!open);
  }

  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
      <Sidebar/>
      <div className='welcome'>
      Welcome   {username}
     </div>
      <Dash1 click={handleClick}/>
     <Dash2 open={open}/>
     <Footer/>
    <div className='wtround'>
      <img src="https://waterminder.com/images/hero-o.png" width="650px" height="700px"/>
      <div className='wtgirl'>
        <img src="https://waterminder.com/images/hero-m-14.png" width="500px" height="700px"/>
        </div>
        </div>
        
        <div className='trackerlogo'>
          <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/03/2804137-Waterllama.png?w=315&h=840" width="40px" height="35px"/>
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
      <img src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png" width="250px" height="100px"/>
      </div>
       <div className='ap'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"width="250px" height="100px"/>
       </div>
        </div>
)
  }

export default HomePage;