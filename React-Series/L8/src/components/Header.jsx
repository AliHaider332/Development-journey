import React from 'react';
import totalAmountContext from './totalAmountContext';
import { useContext } from 'react';
const Header = () => {
  const { amount } = useContext(totalAmountContext);
  return (
    <div>
      Hi I am Header
      <span>Your total bill is : {amount}</span>
    </div>
  );
};

export default Header;
