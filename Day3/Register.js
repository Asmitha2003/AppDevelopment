import React,{useState} from 'react'
import './Register.css'

export default function Register() {
    const[username,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("");
    const[weight,setWeight]=useState("");
    const[exercise,setExercise]=useState("");
    const[wakeup,setWakeup]=useState("");
    const[selects,setSelects]=useState();
    
    const handleSubmit=(e)=>
    {
        e.preventDefault();
    }
 
  return (  
    <>
         
        <div className='img'>
            <img src="https://images.pexels.com/photos/1633940/pexels-photo-1633940.jpeg?cs=srgb&dl=pexels-cats-coming-1633940.jpg&fm=jpg"  width="1540px" height="743px"/>
        <div className='transrec'>
        <div className='reg'>
            <p>Register Here!</p>
        </div>
        
        <div className='form1'><form onSubmit={handleSubmit}>
    
    <label htmlFor="username">Username  </label>
    <input type="username" placeholder='Username' value={username} onChange={ (e)=>setName(e.target.value)} name='username'/><br></br><br></br>
    <label htmlFor="email">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="email" placeholder='Enter email' value={email} onChange={ (e)=>setEmail(e.target.value)}/><br></br><br></br>
    <label htmlFor="password">Password&nbsp;</label>
    <input type="Password" placeholder='Enter Password' value={password} onChange={ (e)=>setPassword(e.target.value)}/><br></br><br></br>
    <label htmlFor="gender">Gender&nbsp;&nbsp;&nbsp;</label>
    <input type="gender" placeholder='Male/Female/Other' value={gender} onChange={ (e)=>setGender(e.target.value)} name='gender'/><br></br><br></br>
    <label htmlFor="weight">Weight&nbsp;&nbsp;&nbsp;</label>
    <input type="weight" placeholder='In kg' value={weight} onChange={ (e)=>setWeight(e.target.value)} name='weight'/><br></br><br></br> 
    <label htmlFor="exercise">Exercise    </label>
    <input type="exercise" placeholder='Regularly/Sometimes/No' value={exercise} onChange={ (e)=>setExercise(e.target.value)}/><br></br><br></br>
    <label htmlFor="Season">Season </label>
    <select value={selects} onChange={e=>setSelects(e.target.value)}><option></option><option>Summer</option><option>Winter</option><option>Spring</option><option>Autumn</option></select><br></br><br></br>
    <button type="submit" class="button">Submit</button>
    </form>
    </div>
        </div>
        </div>
        
        
        
    </>
  )
}

