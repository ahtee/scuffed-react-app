import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import FilterLink from '../../containers/FilterLink';

function TodoListTask(props) {
  const taskStyle = {
    border: '2px solid green',
    padding: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    background: 'yellow',
  };

  const todo = useSelector(state => state.todos[props.todoIndex]);

  return (
    <li style={taskStyle} disabled={props.completed}>
      <p>{todo.text}</p>
      <FilterLink />
    </li>
  );
}

TodoListTask.propTypes = {
  todoIndex: propTypes.number,
  text: propTypes.string,
  completed: propTypes.bool,
};

export default TodoListTask;
