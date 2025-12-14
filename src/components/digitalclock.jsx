import React, { useState, useEffect } from 'react';

function DigitalClock() {
  // 1. Initialize the state with the current time
  const [time, setTime] = useState(new Date());

  // 2. Use useEffect to set up and clear the interval
  useEffect(() => {
    const timerId = setInterval(() => {
      // Update the time state every 1000ms (1 second)
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // The empty dependency array ensures this runs once when mounted

  // 3. Render the time using JSX
  return (
    <div className="digital-clock">
      {/* Format the date object for display */}
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default DigitalClock;
