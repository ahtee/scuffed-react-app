import React from 'react';
import styled from 'styled-components';
import AddTodo from '../containers/AddTodo';
import TodoListContainer from '../containers/TodoListContainer';

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

const HeaderText = styled.h2`
  text-align: center;
  margin: 0px 30px;
`;

function Home() {
  return (
    <Container>
      <Row>
        <HeaderText>
          Start developing your React application with <u>stress</u>.
        </HeaderText>
      </Row>
      <Row>
        <AddTodo />
        <TodoListContainer />
      </Row>
    </Container>
  );
}
export default Home;
