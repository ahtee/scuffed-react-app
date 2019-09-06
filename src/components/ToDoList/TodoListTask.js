import React from 'react';
import FilterLink from '../../containers/FilterLink';

function TodoListTask({ text, completed, onClick }) {
  const taskStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    border: '2px solid green',
    padding: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    background: 'yellow',
  };

  return (
    <li onClick={onClick} style={taskStyle}>
      <p>{text}</p>
      <FilterLink />
    </li>
  );
}
export default TodoListTask;
