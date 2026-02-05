import React, { useRef } from 'react';

const App = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
  };
  console.log('render');

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      <div>
        <label>Enter Name</label>
        <input type="text" ref={nameRef} />
      </div>

      <div>
        <label>Enter Email</label>
        <input type="email" ref={emailRef} />
      </div>

      <div>
        <label>Enter Password</label>
        <input type="password" ref={passwordRef} />
      </div>

      <button type="submit">Get Values</button>
    </form>
  );
};

export default App;

