import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import totalAmountContext from './components/totalAmountContext';
const App = () => {
  const [amount, setAmount] = useState(0);
  return (
    <totalAmountContext.Provider value={{ amount, setAmount }}>
      <Header />
      <Body />
      <Footer />
    </totalAmountContext.Provider>
  );
};

export default App;
