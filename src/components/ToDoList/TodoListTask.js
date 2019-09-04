import React from 'react';

function TodoListTask({ onClick, completed, task }) {
  const taskStyle = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <li onClick={onClick} style={taskStyle}>
      <p>{task}</p>
    </li>
  );
}
export default TodoListTask;
