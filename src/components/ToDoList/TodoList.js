import React from 'react';
import TodoListTask from './TodoListTask';
import TodoListFilters from './TodoListFilters';
import ToDoListTitle from './TodoListTitle';
import AddTodo from '../../containers/AddTodo';
import styled from 'styled-components';
import { toggleTodoCompletion } from '../../actions';

const Container = styled.div`
  border: 2px solid black;
  padding: 30px;
  border-radius: 10px;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
`;

function TodoList({ todos, toggleTodoCompletion }) {
  return (
    <Container>
      <ToDoListTitle title="Todo List" />
      <AddTodo />
      <UnorderedList>
        {todos.map(todo => (
          <TodoListTask
            key={todo.todoIndex}
            {...todo}
            onClick={() => toggleTodoCompletion(todo.todoIndex)}
          />
        ))}
      </UnorderedList>
      <TodoListFilters />
    </Container>
  );
}
export default TodoList;
