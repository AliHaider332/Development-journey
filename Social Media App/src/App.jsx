
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './Components/SideBar';
import FooterElement from './Components/FooterElement';
import LeftContainer from './Components/LeftContainer';
import { useState } from 'react';
function App() {
  
  const [clickButton,changeState]=useState("Home");


  return (
    <>
      <div className="FullContainer">
        <SideBar changeState={changeState} clickButton={clickButton}></SideBar>
        <LeftContainer clickButton={clickButton} ></LeftContainer>
      </div>
      <FooterElement></FooterElement>
    </>
    
  );
}

export default App;
