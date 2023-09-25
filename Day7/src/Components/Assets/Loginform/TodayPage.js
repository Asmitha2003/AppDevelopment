import React, { useState } from 'react';
import './TodayPage.css'; 

function TodayPage() {
const [selectedIcon, setSelectedIcon] = useState('');
const [filledWater, setFilledWater] = useState(0);

  // State to store the goal and limit water filling based on the goal
  const [goal, setGoal] = useState('');

  // Function to handle icon click and update filled water
  const handleIconClick = (iconValue) => {
    if (goal === 0 || filledWater >= goal) {
      return; // Don't update if there's no goal or goal is reached
    }

    setSelectedIcon(iconValue);

    // Calculate the remaining capacity based on the goal and current filled water
    const remainingCapacity = goal - filledWater;

    // Update filledWater based on the associated value of the clicked icon
    if (iconValue === 'cup') {
      const cupValue = 200; // You can adjust the value
      setFilledWater(Math.min(goal, filledWater + cupValue));
    } else if (iconValue === 'glass') {
      const glassValue = 300; // You can adjust the value
      setFilledWater(Math.min(goal, filledWater + glassValue));
    } else if (iconValue === 'bottle') {
      const bottleValue = 500; // You can adjust the value
      setFilledWater(Math.min(goal, filledWater + bottleValue));
    }
  };

  // Function to handle goal input change
  const handleGoalChange = (e) => {
    const newGoal = parseInt(e.target.value, 10) ;
    setGoal(newGoal);
  };

  return (
    <div className="today-page">
      <h2>Today's Water Goal:</h2>
      <input
        type="number"
        value={goal}
        onChange={handleGoalChange}
        placeholder="Set your goal (ml)"
      />
      <div className="water-icons">
        <div
          className={`water-icon ${selectedIcon === 'cup' ? 'selected' : ''}`}
          onClick={() => handleIconClick('cup')}
        >
          Cup
        </div>
        <div
          className={`water-icon ${selectedIcon === 'glass' ? 'selected' : ''}`}
          onClick={() => handleIconClick('glass')}
        >
          Glass
        </div>
        <div
          className={`water-icon ${selectedIcon === 'bottle' ? 'selected' : ''}`}
          onClick={() => handleIconClick('bottle')}
        >
          Bottle
        </div>
      </div>
      <div className='m1'>
        200<br></br> ml<br></br>
      </div>
      <div className='m2'>
        300 <br></br> ml<br></br>
      </div>
      <div className='m3'>
        500 <br></br>
        ml
      </div>
      <div className='wa'>Track whether your Goal is achieved!!</div>
     
        <div className="human-figure">
          <div
            className="water-level"
            style={{ height: `${(filledWater / goal) * 100}%` }}>
          </div>
          
    </div>
    </div>
    
  );
}

export default TodayPage;