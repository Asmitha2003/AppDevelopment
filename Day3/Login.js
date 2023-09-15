import React, {useState} from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const nav=useNavigate("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const authenticate=(e)=>
    {
        e.preventDefault();
        if(email.length==0||password.length==0){
            alert("Enter all fields");
        }
        else{
            nav("/home");
        }
    }
  
return(
    <>
    <div className='image2'>
        <img src="https://static.vecteezy.com/system/resources/previews/009/948/847/original/brown-aesthetic-abstract-minimal-background-perfect-for-wallpaper-backdrop-postcard-background-vector.jpg" width="1540px" height="743.5"/>
        <div className='image'>
        <img src="https://lh4.googleusercontent.com/KTJnmqwUwbBqUCFv3K1h_N26iRnxFCZRLJlcbRwQPdirQvYmSNN9JS1_HcLBpc8JB8oLEVhCUcakC5sD6zPL3PySOmiAa7YLu2FE9KlHkoVEKqSYjaIMkRec6GWAZ-JGfFYKUto" width="600px" height="743.5px"/>
        <div className='rec'>
    
            <div className='wel'>
                <p>Welcome to AquaTrack!!</p>
            </div>
            <div className='form1'>
            <form>
        <label htmlFor="email">Email<br></br></label>
        <input type="email" placeholder='Enter email' value={email} onChange={ (e)=>setEmail(e.target.value)}/><br></br><br></br>
        <label htmlFor="password">Password<br></br></label>
        <input type="Password" placeholder='Enter Password' value={password} onChange={ (e)=>setPassword(e.target.value)}/><br></br><br></br><br></br>
        <button type="submit" class="button" onClick={authenticate}>LOGIN</button>
        </form></div>
            <div className='forget'>
                <p>Forget Password?</p>
            </div>
        </div>
    </div>
        
        </div>
    
    

   
       
    </>
)
  
}
