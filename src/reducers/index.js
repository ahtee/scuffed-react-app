import { combineReducers } from 'redux';
import todoList from './todoList';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todoList,
  visibilityFilter,
});
