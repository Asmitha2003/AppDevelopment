import React,{useState} from 'react'
import './Register1.css'
import teaa from '../Loginform/pexels-cats-coming-1633940 (1).jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register1() {
    const nav =useNavigate("");
    const[username,setName]=useState("");
    const[emailid,setEmail]=useState("");
    const[mobileno,setWeight]=useState("");
    const[password,setPassword]=useState("");
    
    {/*const[gender,setGender]=useState("");
const[Age,setAge]=useState("");*/}
    const details={username,emailid,mobileno,password}
    
    
    const authenticate=async(e)=>
    {
        e.preventDefault();
        if(username.length===0||emailid.length===0||password.length===0||mobileno.length==0){
            alert("Enter all fields");
        }
        else{
            await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno
      ,password});
            nav("/")
        }
    }
  return (
    <div>
        <div className="teaback">
            <img src={teaa} alt='teapic' width="1540px" height="750.9px"/>
            <div className='rectangle'>
          <div className='word'>
        <p>Register Here!</p>
    </div>
    <div className="regform">
        <form>
            <label htmlFor="username">Username  </label>
            <input type="username" placeholder='Enter Username' value={username} onChange={ (e)=>setName(e.target.value)} /><br></br><br></br>
            
            <label htmlFor="email">Email &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email" placeholder='Enter email' value={emailid} onChange={ (e)=>setEmail(e.target.value)}/><br></br><br></br>
            
            <label htmlFor="number">Goal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="number" placeholder='Enter your daily goal(ml)' value={mobileno} onChange={ (e)=>setWeight(e.target.value)} name='weight'/><br></br><br></br> 
           
            
            <label htmlFor="password">Password&nbsp;</label>
            <input type="Password" placeholder='Enter Password' value={password} onChange={ (e)=>setPassword(e.target.value)}/><br></br><br></br>
            
            {/*<label htmlFor="gender">Gender&nbsp;&nbsp;&nbsp;</label>
            <input type="gender" placeholder='Male/Female/Other' value={gender} onChange={ (e)=>setGender(e.target.value)} name='gender'/><br></br><br></br>
             <label htmlFor="age">MobileNo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            
           
  <input type="number" placeholder='Enter age' value={age} onChange={ (e)=>setAge(e.target.value)}/><br></br><br></br>*/}
  <button type="submit" class="button1" onClick={authenticate}>Submit</button>
        </form>
    </div>
            </div>
    </div>
    </div>
  )
}
