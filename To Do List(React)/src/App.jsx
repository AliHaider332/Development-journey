import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './Heading';
import InputPortion from './InputPortion';
import Task from './Task';
import Container from './Container';
function App() {
  const [count, setCount] = useState(0);
  let arr = [
    { id: 1, task: "Go to school", date: "10/11/2005" },
    { id: 2, task: "Buy groceries", date: "15/07/2024" },
    { id: 3, task: "Call mom", date: "05/06/2025" },
    { id: 4, task: "Finish assignment", date: "20/08/2025" },
    { id: 5, task: "Visit doctor", date: "12/09/2025" }
  ];
  function add(data)
  {
    arr.push({id:6,task: data,date:"10/11/2025"})
  }  
  

  return (
  
      <Container>
      <Heading></Heading>
      <InputPortion></InputPortion>
      <Task TotalTask={arr}></Task>
      </Container>
      
      

  
  )
}

export default App
