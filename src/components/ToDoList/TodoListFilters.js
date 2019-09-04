import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../../actions';

function TodoListFilters() {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>Show All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Show Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        SHow Completed
      </FilterLink>
    </div>
  );
}
export default TodoListFilters;
