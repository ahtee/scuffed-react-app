const todos = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return [
        ...state,
        {
          index: action.todoIndex,
          text: action.text,
          completed: false,
        },
      ];
    case 'DELETE_TODO':
      return [
        ...state,
        {
          index: action.todoIndex,
          completed: true,
        },
      ];
    case 'EDIT_TODO':
      return [
        ...state,
        {
          index: action.todoIndex,
          text: action.text,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.index === action.index
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todos;
