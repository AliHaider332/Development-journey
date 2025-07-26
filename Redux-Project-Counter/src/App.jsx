import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header';
import ValueShow from './Component/ValueShow';
import FunctionalButtons from './Component/FunctionalButtons';
import RendomFunction from './Component/RendomFunction';
import PrivacyPortion from './Component/privacyPortion';
import { useSelector } from 'react-redux';
import StateButton  from './Component/StateButton';
function App() {
  const showState = useSelector((store) => store.privacy);
  return (
    <>
      <div className="container text-center mt-5">
        <Header />
        {showState ? (
          <PrivacyPortion />
          
        ) : (
          <>
            <ValueShow />
            <FunctionalButtons></FunctionalButtons>
            <RendomFunction></RendomFunction>
            
          </>
        )}
      <StateButton/>
      </div>
    </>
  );
}

export default App;
