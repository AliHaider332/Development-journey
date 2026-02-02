import React, { useCallback, useMemo, useState } from 'react';
import Counter1 from './Counter1';
const App = () => {
  const [counter, updateCounter] = useState(0);
  const [num, setNum] = useState(0);
  console.log(counter);

  const increment = useCallback(() => {
    console.log('hi');
    updateCounter(counter + 1);
  },[counter]);
  function incre() {
    setNum(num + 1);
  }
  return (
    <>
      <div>App</div>
      <Counter1 counter={counter} increment={increment}></Counter1>
      <div>Hi I am APP {num}</div>
      <button onClick={incre}>Increment</button>
    </>
  );
};

export default App;
