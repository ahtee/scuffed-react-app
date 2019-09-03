import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(circle, #ffce00, #f06d06);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Emoji = styled.div`
  font-size: 5rem;
  animation: ${rotate} 10s linear infinite;
`;

const HeaderText = styled.h2`
  text-align: center;
  margin: 0px 30px;
`;

function Home() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
  });
  return (
    <Container>
      <Row>
        <Emoji>
          <animated.span style={props}>🚀</animated.span>
        </Emoji>
        <HeaderText>
          Start developing your React application with <u>stress</u>.
        </HeaderText>
        <Emoji>
          <animated.span style={props}>✨</animated.span>
        </Emoji>
      </Row>
    </Container>
  );
}
export default Home;
