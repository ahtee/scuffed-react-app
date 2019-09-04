import { connect } from 'react-redux';
import { toggleTodoCompletion } from '../actions';
import TodoList from '../components/ToDoList/TodoList';
import { VisibilityFilters } from '../actions';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: index => dispatch(toggleTodoCompletion(index)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
