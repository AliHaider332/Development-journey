import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import AmountSummary from './Context/AmountSummary';
const Context = () => {
  const [amount, updateAmount] = useState(0);
  const [quantity, updateQuantity] = useState(0);
  const Functionality = useMemo(() => {
    return { amount, updateAmount, quantity, updateQuantity };
  }, [amount, quantity]);

  return (
    <AmountSummary value={Functionality}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Body />
        <Footer />
      </div>
    </AmountSummary>
  );
};

export default Context;
