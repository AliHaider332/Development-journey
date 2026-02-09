import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate();
  const value = useRef();
  function handleClick() {
    navigate(`./${value.current.value}`);
  }
  return (
    <>
      <div>Contact</div>
      <input type="text" ref={value} />
      <button onClick={handleClick}>Go</button>
      <Outlet />
    </>
  );
};

export default Contact;
