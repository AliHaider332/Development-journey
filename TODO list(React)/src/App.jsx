import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Component/Container';
import TopContainer from './Component/TopContainer';
import AllTasks from './Component/AllTasks';
import Heading from './Component/Heading';
import NoTask from './Component/NoTask';


function App() {
  

  let [tasks, changeTask] = useState([]);

  let [inputValue, changeInputValue] = useState('');
  let [inputDate, changeInputDate] = useState('No Date');

  function getInputValue(value) {
    changeInputValue(value);
  }

  function getInputDate(value) {
    changeInputDate(value);
  }

  function addTask() {
    let temp = {
      key: tasks.length + 1,
      description: inputValue,
      date: inputDate,
    };
    let changedTasks = [...tasks, temp];
    changeTask(changedTasks);
    changeInputValue('');
    changeInputDate('');
  }

  function deleteTask(value) {
    let newTasks = tasks.filter((item) => {
      return item.key !== value;
    });
    changeTask(newTasks);
  }

  return (
    <>
      <Container>
        <Heading></Heading>
        <TopContainer
          getInputValue={getInputValue}
          getInputDate={getInputDate}
          addTask={addTask}
          inputValue={inputValue}
          inputDate={inputDate}
        ></TopContainer>
        {tasks.length==0 && <NoTask></NoTask>}
  
        
        <AllTasks tasks={tasks} deleteTask={deleteTask}></AllTasks>
      </Container>
    </>
  );
}

export default App;
