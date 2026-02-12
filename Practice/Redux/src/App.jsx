import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADDFuction, IncrementNumber } from './Redux/actions';
import Count from './Count';
const App = () => {
  const State = useSelector((state) => {
    return state.tempReducer;
  });

  const dispatcher = useDispatch();
  console.log(State);
  return (
    <>
      <div>App </div>
      <button
        onClick={() => {
          dispatcher(ADDFuction('ABC'));
        }}
      >
        Click Me
      </button>
      <button
        onClick={() => {
          dispatcher(IncrementNumber());
        }}
      >
        INCREMENT
      </button>
      <Count />
    </>
  );
};

export default App;
