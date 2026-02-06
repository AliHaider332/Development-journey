import React from 'react';
import AmountSummary from '../Context/AmountSummary';
import { useContext } from 'react';

const Header = React.memo(() => {
  const { quantity, amount } = useContext(AmountSummary);
  return (
    <div
      style={{
        backgroundColor: '#1f2933', // professional dark
        padding: '15px 25px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: '#22c55e', // green accent
          fontSize: '26px',
          fontWeight: 'bold',
          margin: 0,
          letterSpacing: '1px',
        }}
      >
        Blinkit App
      </h1>

      {/* Cart Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          backgroundColor: '#111827',
          padding: '8px 14px',
          borderRadius: '10px',
          color: '#fff',
        }}
      >
        <span style={{ fontSize: '20px' }}>🛒</span>

        <span style={{ fontWeight: '600' }}>
          Items: <span style={{ color: '#22c55e' }}>{quantity}</span>
        </span>

        <span style={{ fontWeight: '600' }}>
          Total: <span style={{ color: '#22c55e' }}>Rs. {amount}</span>
        </span>
      </div>
    </div>
  );
});

export default Header;
