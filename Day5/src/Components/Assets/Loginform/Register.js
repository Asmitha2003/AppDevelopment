import React,{useState} from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const nav =useNavigate("");
    const[username,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("");
    const[weight,setWeight]=useState("");
    const[exercise,setExercise]=useState("");
    
    
    const authenticate=(e)=>
    {
        e.preventDefault();
        if(username.length===0||email.length===0||password.length===0||gender.length===0||weight.length===0||exercise.length===0){
            alert("Enter all fields");
        }
        else{
            nav("/login")
        }
    }
 
  return (  
    <>
         
        <div className='img'>
            <img src="https://images.pexels.com/photos/1633940/pexels-photo-1633940.jpeg?cs=srgb&dl=pexels-cats-coming-1633940.jpg&fm=jpg"  width="1540px" height="743px"/>
        <div className='transrec'>
        <div className='registertxt'>
            <p>Register Here!</p>
        </div>
        
        <div className='formreg'><form>
    
    <label htmlFor="username">Username  </label>
    <input type="username" placeholder='Username' value={username} onChange={ (e)=>setName(e.target.value)} name='username'/><br></br><br></br>
    <label htmlFor="email">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="email" placeholder='Enter email' value={email} onChange={ (e)=>setEmail(e.target.value)}/><br></br><br></br>
    <label htmlFor="password">Password&nbsp;</label>
    <input type="Password" placeholder='Enter Password' value={password} onChange={ (e)=>setPassword(e.target.value)}/><br></br><br></br>
    <label htmlFor="gender">Gender&nbsp;&nbsp;&nbsp;</label>
    <input type="gender" placeholder='Male/Female/Other' value={gender} onChange={ (e)=>setGender(e.target.value)} name='gender'/><br></br><br></br>
    <label htmlFor="number">Weight&nbsp;&nbsp;&nbsp;</label>
    <input type="number" placeholder='In kg' value={weight} onChange={ (e)=>setWeight(e.target.value)} name='weight'/><br></br><br></br> 
    <label htmlFor="exercise">Exercise    </label>
    <input type="exercise" placeholder='Regularly/Sometimes/No' value={exercise} onChange={ (e)=>setExercise(e.target.value)}/><br></br><br></br>
    <button type="submit" class="button1" onClick={authenticate}>Submit</button>
    </form>
    </div>
        </div>
        </div>
         
    </>
  )
}