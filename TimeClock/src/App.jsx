import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './Components/Timer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <Timer></Timer>
    </center>
  );
}

export default App;
