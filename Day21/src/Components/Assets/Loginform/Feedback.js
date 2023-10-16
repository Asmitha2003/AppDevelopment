import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import person from '../Loginform/pngwing.com.png';
import Nave from './Nave';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const details={name,email,message}
  const nav =useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    {
       if(name.length==0 && email.length==0 && message.length==0)
        {
          alert("Enter name,email and message")
        }
        else if(name.length===0)
        {
          alert("Enter Name")
        }
        else if(email.length===0)
        {
          alert("Enter email");
        }
        else if(message.length===0)
        {
          alert("Enter message");
        }
        else 
        {
          axios.post("http://localhost:8082/feed/postFeedback",{name,email,message});
          nav("/");
      
        }
      }
    }
    
  return (
    <div className='reccc'>
    <div className='feedvv'>
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" class="buttonfeed" onClick={handleSubmit}>Submit Feedback</button>
      </form>
    </div>
    </div>
    <Nave/>
    </div>
  );
}

export default Feedback;