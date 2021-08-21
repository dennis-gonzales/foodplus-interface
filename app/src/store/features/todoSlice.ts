import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import { requestStarted } from '../actions/requestApi';

export interface TodoState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: TodoState = {
  userId: 0,
  id: 0,
  title: '',
  completed: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todosReceived: (_, action: PayloadAction<TodoState>) => {
      return action.payload;
    },
  },
});

export const { todosReceived } = todoSlice.actions;
export default todoSlice.reducer;

export const selectTodo = (state: RootState) => state.entities.todo;

export const loadTodos = () => requestStarted({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  onSuccess: todosReceived.type,
});