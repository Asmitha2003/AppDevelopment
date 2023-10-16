import React, { useState } from 'react';
import axios from 'axios';

function WaterTracker() {
  const [selectedIcon, setSelectedIcon] = useState('');
  const [amount, setAmount] = useState(0);

  const handleIconClick = (iconValue) => {
    setSelectedIcon(iconValue);

    let iconAmount = 0;
    if (iconValue === 'cup') {
      iconAmount = 250;
    } else if (iconValue === 'glass') {
      iconAmount = 500;
    } else if (iconValue === 'bottle') {
      iconAmount = 750;
    }

    setAmount(amount + iconAmount);
  };

  const saveWaterEntry = async () => {
    const response = await axios.post('/water-entries', {
      date: new Date(),
      amount: amount,
    });
  };

  return (
    <div>
      <h2>Water Tracker</h2>
      <div className="icon-container">
        <div
          className={`water-icon ${selectedIcon === 'cup' ? 'selected' : ''}`}
          onClick={() => handleIconClick('cup')}
        >
          Cup (250ml)
        </div>
        <div
          className={`water-icon ${selectedIcon === 'glass' ? 'selected' : ''}`}
          onClick={() => handleIconClick('glass')}
        >
          Glass (500ml)
        </div>
        <div
          className={`water-icon ${selectedIcon === 'bottle' ? 'selected' : ''}`}
          onClick={() => handleIconClick('bottle')}
        >
          Bottle (750ml)
        </div>
      </div>
      <button onClick={saveWaterEntry}>Save Entry</button>
    </div>
  );
}

export default WaterTracker;