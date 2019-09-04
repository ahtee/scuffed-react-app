import React from 'react';
import TodoListTask from './TodoListTask';

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListTask
          key={todo.index}
          {...todo}
          onClick={() => toggleTodo(todo.index)}
        />
      ))}
    </ul>
  );
}
export default TodoList;
