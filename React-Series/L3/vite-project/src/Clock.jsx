import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [state, changeState] = useState(true);
  
  
    useEffect(() => {
      if(!state)
        return;
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1 * 1000);
      return () => {
        clearInterval(interval);
      };
    }, [state]);
  

  return (
    <div>
      {state && <div>Clock {time}</div>}
      <button
        onClick={() => {
          changeState(!state);
        }}
      >
        {state ? 'hide' : 'show'}
      </button>
    </div>
  );
};

export default Clock;
