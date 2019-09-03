import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
  height: 7rem;
  color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const NavTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffce00;
`;

function Navigation() {
  return (
    <Nav>
      <NavTitle>New React App</NavTitle>
    </Nav>
  );
}
export default Navigation;
