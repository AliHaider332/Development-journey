import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './Heading';
import InputPortion from './InputPortion';
import Task from './Task';

function App() {
  const [count, setCount] = useState(0);
  let arr = [
    { task: "Go to school", date: "10/11/2005" },
    { task: "Buy groceries", date: "15/07/2024" },
    { task: "Call mom", date: "05/06/2025" },
    { task: "Finish assignment", date: "20/08/2025" },
    { task: "Visit doctor", date: "12/09/2025" }
  ];
  

  return (
    <>
      
      <Heading></Heading>
      <InputPortion></InputPortion>
      <Task TotalTask={arr}></Task>
      

    </>
  )
}

export default App
