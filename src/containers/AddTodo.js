import React from 'react';
import { connect } from 'react-redux';
import { createTodoListTask } from '../actions';
import Button from '../components/Button';

const inputStyle = {
  display: 'block',
  width: '100%',
  height: 'calc(1.5em + 2px)',
  padding: '.375rem .375rem',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.8',
  color: '#495057',
  backgroundColor: '#ffffff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  borderRadius: '.25rem',
  transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
};

function AddTodo({ dispatch }) {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(createTodoListTask(input.value));
          input.value = '';
        }}
      >
        <input style={inputStyle} ref={node => (input = node)} />
        <Button type="submit" text="Add Todo" />
      </form>
    </div>
  );
}
export default connect()(AddTodo);
