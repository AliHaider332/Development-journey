import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Outlet></Outlet>
    </>
  );
};

export default App;
