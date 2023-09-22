import React from 'react'
import './Dash1.css';

export default function Dash2({open}) {

  return (
    <div>
    <div className={open?"sidebar collapse":"sidebar"}>
       <ul>
           <li>Profile</li>
           <li>Today</li>
           <li>Histroy</li>
           <li>Reminder</li>
       </ul>
       </div>
    </div>
  )
}