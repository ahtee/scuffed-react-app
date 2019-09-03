import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: transparent;
  padding: 20px;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

function Footer() {
  return (
    <Foot>
      <p>
        <strong>MIT Licensed</strong> Software
      </p>
    </Foot>
  );
}
export default Footer;
