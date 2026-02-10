import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTFuction } from './Redux/actions';

const Count = () => {
  const dispatcher = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  console.log(state, 'Hi I am Count');
  return (
    <button
      onClick={() => {
        dispatcher(COUNTFuction());
      }}
    >
      Count
    </button>
  );
};

export default Count;
