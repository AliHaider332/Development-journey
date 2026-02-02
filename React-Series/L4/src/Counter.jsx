import React, { useState } from 'react';

const Counter = (props) => {
  const { counter } = props;
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>This is the counter {counter}</p>
      <div>Value is {value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
