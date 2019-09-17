import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: radial-gradient(circle, #ffce00, #f06d06);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderText = styled.h2`
  text-align: center;
  margin: 0px 30px 20px 30px;
`;

const Underlined = styled.span`
  text-decoration: underline;
`;

function Home() {
  return (
    <Container>
      <Row>
        <HeaderText>
          Start developing your React application with
          <Underlined> stress</Underlined>.
        </HeaderText>
      </Row>
    </Container>
  );
}
export default Home;
