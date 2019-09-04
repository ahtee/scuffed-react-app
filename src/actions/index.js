// Redux actions

let todoIndex = 0;

export function createTodoListTask(text) {
  return {
    type: 'CREATE_TODO',
    index: todoIndex + 1,
    text,
  };
}

export function deleteTodoListTask() {
  return {
    type: 'DELETE_TODO',
    index: todoIndex - 1,
  };
}

export function editTodoListTask(text) {
  return {
    type: 'EDIT_TODO',
    text,
  };
}

export function toggleTodoCompletion(index) {
  return {
    type: 'TOGGLE_TODO',
    index,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
