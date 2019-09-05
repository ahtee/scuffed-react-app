import React from 'react';

const buttonStyle = {
  display: 'inline-block',
  fontWeight: '400',
  textAlign: 'center',
  verticalAlign: 'middle',
  userSelect: 'none',
  padding: '.375rem .75rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  borderRadius: '.25rem',
  transition:
    'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  color: '#fff',
  backgroundColor: '#007bff',
  borderColor: '#007bff',
};

function Button({ type, text, onClick }) {
  return (
    <button type={type} style={buttonStyle} onClick={onClick}>
      {text ? text : children}
    </button>
  );
}
export default Button;
