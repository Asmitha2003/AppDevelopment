import React, { useState } from 'react';
import './WaterIntakeCalculator.css'
import axios from 'axios';
import person from '../Loginform/pngwing.com.png';
import Nave from './Nave';


function WaterIntakeCalculator() {
 
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [climate, setClimate] = useState('');
  
  const [waterIntake, setWaterIntake] = useState(null);
  const details={age,weight,activityLevel,climate}

  const authenticate = (e) => {
   
    e.preventDefault();
    if(age.length===0||weight.length===0||activityLevel==null||climate==null){
      alert("Enter all fields");
  }
  else{
      axios.post("http://localhost:8080/postCalculation",{age,weight,activityLevel,climate});
  }


    const baseIntake = 0.035; 
    const adjustedIntake = baseIntake * weight;


    let activityMultiplier = 1.0;
    if (activityLevel === 'low') {
      activityMultiplier = 0.5;
    } else if (activityLevel === 'moderate') {
      activityMultiplier = 0.75;
    } else if (activityLevel === 'high') {
      activityMultiplier = 1.0;
    }


    let climateMultiplier = 1.0;
    if (climate === 'hot') {
      climateMultiplier = 1.2;
    } else if (climate === 'cold') {
      climateMultiplier = 0.8;
    }

    const totalIntake = adjustedIntake * activityMultiplier * climateMultiplier;
    setWaterIntake(totalIntake);
  }
  

  return (
    <div>
      <div className='wic'>
      <h2>Water Intake Calculator</h2>
      </div>
      
         
      <div className='calform'>
      <form onSubmit={authenticate}>
        <label>
          Age (years):
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <br />
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="">Select an Activity Level</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <label>
          Climate:
          <select value={climate} onChange={(e) => setClimate(e.target.value)}>
            <option value="">Select a Climate</option>
            <option value="average">Average</option>
            <option value="hot">Hot</option>
            <option value="cold">Cold</option>
          </select>
        </label>
        <br />
        <br/>
        <button type="submit" >Calculate</button>
      </form>
      </div>

      {waterIntake !== null && (
        <div className='recom'>
          <h3>Your Recommended Daily Water Intake:</h3>
          <div className='result'>
          <p>{waterIntake.toFixed(2)} l</p>
          </div>
        </div>
      )}
      
     
    <Nave/>
    </div>
  );
      }


export default WaterIntakeCalculator;