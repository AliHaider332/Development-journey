import React, { useCallback, useMemo, useState } from 'react';
import Sum from './Sum';
const App = () => {
  const [count, setCount] = useState(0);
  console.log('I am APP');
  const [num, setNum] = useState(100000);
  const [COUNT, UPDATE_COUNT] = useState(0);
  const ans = useMemo(() => {
    let total = 0;
    if (num > 1) {
      total++;
    }
    for (let i = 3; i < num; i++) {
      total++;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          total--;
          break;
        }
      }
    }
    return total;
  }, [num]);

  const handleClick = useCallback(() => {
    UPDATE_COUNT(COUNT + 1);
    console.log('HI its count', COUNT);
  }, [COUNT]);

  return (
    <>
      <div>App {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Sum ans={ans}></Sum>
      <button
        onClick={() => {
          setNum(num + 10000);
        }}
      >
        Number
      </button>
      <div>Hi I am {COUNT}</div>
      <button onClick={handleClick}>1+</button>
    </>
  );
};

export default App;
