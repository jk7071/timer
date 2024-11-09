import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Track the timer value in seconds
  const [isActive, setIsActive] = useState(false); // Track if the timer is active
  const timerRef = useRef(null); // Ref to store the timer interval

  useEffect(() => {
    if (isActive) {
      // Start the timer interval
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1); // Increment timer by 1 second
      }, 1000);
    } else {
      clearInterval(timerRef.current); // Clear the interval if timer is inactive
    }
    return () => clearInterval(timerRef.current); // Clean up on component unmount
  }, [isActive]);

  // Function to toggle between start and pause
  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  // Function to reset the timer
  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Timer: {time}s</h1>
      <button onClick={handleStartPause}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
