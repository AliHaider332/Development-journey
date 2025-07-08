import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './InputBox'
import ButtonContainer from './ButtonContainer'
import Container from './Container'
function App() {
  const [count, setCount] = useState(0)
  const [inputData,changeInputData]=useState("");

  const buttonClick=(clickedData)=>{
    if(clickedData === 'C')
    {
      changeInputData("");
    }
    else if(clickedData === "=")
    {
      try {
        changeInputData(eval(inputData));
      } catch  {
        changeInputData("Invalid Calculation")
      }
    }
    else
    {
      let newInputData=inputData+clickedData;
      changeInputData(newInputData);
    }
    
  }

  return (
    <>
    <Container>
    <InputBox data={inputData}></InputBox>
    <ButtonContainer buttonClick={buttonClick}></ButtonContainer>
    </Container>
      
    </>
  )
}

export default App
