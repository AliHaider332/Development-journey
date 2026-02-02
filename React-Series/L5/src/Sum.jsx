import React, { useMemo } from 'react';

const Sum = React.memo(({ ans }) => {
  console.log('I am SUM', ans);
  // const ans = useMemo(

  return <div>Sum {ans}</div>;
});

export default Sum;
