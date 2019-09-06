import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { VisibilityFilters } from '../../actions';

function TodoListFilters() {
  return (
    <div>
      <div>
        <h2>Show:</h2>
      </div>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  );
}
export default TodoListFilters;
