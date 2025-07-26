import React from 'react';
import { useSelector } from 'react-redux';

function ValueShow() {
  const throwValue = useSelector(store => store.counter.counterValue);
  return <h2 id="counterValue" className="display-4">{throwValue}</h2>;
}

export default ValueShow;
