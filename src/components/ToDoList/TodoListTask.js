import React from 'react';

function TodoListTask({ text, completed, onClick }) {
  const taskStyle = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <li onClick={onClick} style={taskStyle}>
      <p>{text}</p>
    </li>
  );
}
export default TodoListTask;
