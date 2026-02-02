import React, { useRef, useState } from 'react';

const App = () => {
  const [timer, setTimer] = useState(0);
  const intervalId = useRef(null);
  function startTimer() {
    if (intervalId.current!=null) {
      clearInterval(intervalId.current);
      return;
    }
    intervalId.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }
  function resetTimer() {
    clearInterval(intervalId.current);
    setTimer(0);
    intervalId.current = null;
  }
  return (
    <>
      <div>App {timer}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [flag, setFlag] = useState(false);

//   useEffect(() => {
//     let id;

//     if (flag) {
//       id = setInterval(() => {
//         setCounter(prev => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(id);
//   }, [flag]);
//   return (
//     <>
//       <div>App</div>
//       <div>Counter {counter}</div>
//       <button
//         onClick={() => {
//           setFlag(true);
//         }}
//       >
//         Start
//       </button>
//       <button
//         onClick={() => {
//           setFlag(!flag);
//         }}
//       >
//         Stop
//       </button>
//       <button
//         onClick={() => {
//           setCounter(0);
//           setFlag(false);
//         }}
//       >
//         Reset
//       </button>
//     </>
//   );
// };

// export default App;
