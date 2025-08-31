import { useState } from 'react';
import './App.css';
import Container from './Component/Container';
import TopContainer from './Component/TopContainer';
import AllTasks from './Component/AllTasks';
import Heading from './Component/Heading';
import NoTask from './Component/NoTask';
import { postData } from '../serverLayer';
import { getData } from '../serverLayer';
import { useEffect } from 'react';
import { deleteData } from '../serverLayer';
import { completeData } from '../serverLayer';
function App() {
  const [tasks, changeTask] = useState([]);
  const [loading, changeLoading] = useState(true);
  useEffect(() => {
    async function fetchTasks() {
      const data = await getData();
      changeTask(data);
    }
    fetchTasks();
  }, [loading]);

  const [inputValue, changeInputValue] = useState('');
  const [inputDate, changeInputDate] = useState('');

  function getInputValue(value) {
    changeInputValue(value);
  }

  function getInputDate(value) {
    changeInputDate(value);
  }

  async function addTask() {
    const today = new Date().toISOString().split('T')[0]; 

    const newTask = {
      task: inputValue,
      date: inputDate && inputDate !== '' ? inputDate : today, 
    };

    const savedTask = await postData(newTask);

    if (savedTask && savedTask._id) {
      changeTask([...tasks, savedTask]);
    } else {
      changeTask([...tasks, newTask]);
    }

    changeInputValue('');
    changeInputDate(''); 
  }

  async function deleteTask(value) {
    await deleteData(value);
    changeLoading(!loading);
  }

  async function completeTask(value) {
    await completeData(value);
    changeLoading(!loading);
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
        {tasks.length == 0 && <NoTask></NoTask>}

        <AllTasks
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        ></AllTasks>
      </Container>
    </>
  );
}

export default App;
