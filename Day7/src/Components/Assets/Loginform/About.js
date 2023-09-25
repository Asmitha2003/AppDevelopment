import React from 'react'
import './About.css';
import ab from '../Loginform/b6.png';
import l from '../Loginform/logo.webp';
import graphi from '../Loginform/statistics.png';
import goali from '../Loginform/goals.png';
import remi from '../Loginform/bell.png';


export default function About() {
    
  return (
    <div>
    
    <div className='aboutback'>
            <img src={ab} alt='back' height="743px" width="1535px"/>
            <div className='arec'></div>
            <div className='arec2'></div>
            <div className='arec3'>
                <div className='logode'>
                    <img src={l} alt='iconlogo' height="30px" width="30px"/>
                </div>
                <div className='at'>
                    <p>AquaTrack</p>
                </div>
                <div className='now'>
                    <p>now</p>
                </div>
                <div className='aboutcon'>
                    <p> A popular and easy way to make sure you are <br></br>getting proper water intake each day.<br></br> Calculating proper hydration amounts, setting goals,<br></br>receiving updates, and getting reminders are all<br></br> helpful features within apps to help get your<br></br> water intake where you want it to be.</p>
                </div>
            </div>
            <div className='graphicon'>
                <img src={graphi} alt='icong' height="50px" width="50px"/>
                </div>
                <div className='goalicon'>
                <img src={goali} alt='icongo' height="50px" width="50px"/>
                </div>
                <div className='remindericon'>
                <img src={remi} alt='iconre' height="40px" width="40px"/>
                </div>
               <div className='con11'>
                <p>WaterMinder makes it quick <br></br>and easy to set your <br></br>water intake goals and <br></br>then track your daily <br></br>water intake progress.</p>
              </div>
              <div className='con22'>
                You can also view previous <br></br>dates with a simple tap.<br></br>The previous records will<br></br>be displayed as graph.
              </div>
              <div className='con33'>
                <p>You'll get a reminder <br></br>to have a drink. <br></br>You can manually set the<br></br>remainders as you wish.</p>
              </div>
    </div>     
     </div>
     
  )
}
