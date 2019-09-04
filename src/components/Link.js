import React from 'react';

function Link({ active, children, onClick }) {
  const linkStyle = {
    marginLeft: 10,
  };
  return (
    <button onClick={onClick} disabled={active} style={linkStyle}>
      {children}
    </button>
  );
}
export default Link;
