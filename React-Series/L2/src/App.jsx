import React, { useRef, useState } from 'react';
import './App.css';
const App = () => {
  const [fruite, setFruite] = useState(['apple', 'mengo', 'banana']);
  const data = useRef('')
  function operation() {
    if (data.current.value != '') {
      console.log(data.current);
      
      setFruite([...fruite, data.current.value]);
    }
  }
  return (
    <>
      <ol className="fullContainer">
        {fruite.map((f,index) => (
          <li>{f}</li>
        ))}
      </ol>
      <input type="text" id="data" ref={data} />
      <button onClick={operation}>Add</button>
    </>
  );
};

export default App;
