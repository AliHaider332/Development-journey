import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADDFuction } from './Redux/actions';
import Count from './Count';
const App = () => {
  const state = useSelector((state) => {
    return state.product;
  });

  const dispatcher = useDispatch();
  console.log(state);
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
      <Count />
    </>
  );
};

export default App;
