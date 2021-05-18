// constants

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// filters
export const ALL = 'ALL'
export const COMPLETED = 'COMPLETED'
export const ACTIVE = 'ACTIVE'
export const SET_FILTER = 'SET_FILTER'

// action creators

export const add_todo = (text, date) => ({
  type: ADD_TODO,
  text,
  date,
});

export const delete_todo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const edit_todo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

export const toggle_todo = (id, value) => ({
  type: TOGGLE_TODO,
  id,
  value,
});

export const set_filter = (filter) => ({
  type: SET_FILTER,
  filter
})