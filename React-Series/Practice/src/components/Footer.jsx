import React from 'react';

const Footer = React.memo(() => {
  return (
    <div
      style={{
        marginTop: 'auto',
        backgroundColor: '#1f2933',
        color: '#fff',
        textAlign: 'center',
        padding: '12px 0',
        fontSize: '14px',
      }}
    >
      © 2026 Blinkit App. All rights reserved.
    </div>
  );
});

export default Footer;
