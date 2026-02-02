import React from 'react';

const Counter1 = React.memo(({ counter, increment }) => {
  console.log('counter');

  return (
    <>
      <div>Hi I am Counter {counter}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
});

export default Counter1;
