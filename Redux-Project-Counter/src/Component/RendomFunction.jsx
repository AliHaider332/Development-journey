import React from 'react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

function RendomFunction() {
  const dispatcher = useDispatch();
  const valueRef = useRef();


  const handleAdd = () => {
    const value = parseInt(valueRef.current.value) || 0;
    dispatcher({ type: 'ADD', payload: value })
    valueRef.current.value='';
  };

  const handleSubtract = () => {
    const value = parseInt(valueRef.current.value) || 0;
    dispatcher({ type: 'SUBTRACT', payload: value });
    valueRef.current.value='';
  };

  return (
    
    <div className="mt-3">
        <input
        type="text"
        className="form-control d-inline-block"
        id="exampleInput"
        placeholder="Type here..."
        style={{ width: '150px' }}
        ref={valueRef}
      />
      <button
        type="button"
        className="btn btn-dark"
        style={{ marginLeft: '10px' }}
        onClick={handleAdd}
      >
        Add
      </button>
      <button
        type="button"
        className="btn btn-warning"
        style={{ marginLeft: '10px' }}
        onClick={handleSubtract}
      >
        Subtract
      </button>
    </div>
  );
}

export default RendomFunction;
