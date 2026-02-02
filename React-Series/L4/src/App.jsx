import React, { useState } from 'react';
import Counter from './Counter';

const App = () => {
  const [counters, setCounter] = useState(['A', 'B', 'C']);

  return (
    <>
      <div>Counter App</div>
      <button
        onClick={() => {
          setCounter(['D', ...counters]);
        }}
      >
        Increase Counters
      </button>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {counters.map((count) => (
          <Counter key={count} counter={count}></Counter>
        ))}
      </div>
    </>
  );
};

export default App;
