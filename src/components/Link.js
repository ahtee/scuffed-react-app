import React from 'react';
import Button from './Button';

function Link({ active, children, onClick }) {
  return (
    <Button onClick={onClick} disabled={active}>
      {children}
    </Button>
  );
}
export default Link;
