import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import { requestStarted } from '../actions/requestApi';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todoList: Todo[];
  isLoading: boolean;
}

const initialState: TodoState = {
  todoList: [],
  isLoading: false,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todosRequested: (state, _) => {
      state.isLoading = true;
    },
    todosReceived: (state, action: PayloadAction<Todo[]>) => {
      console.log({ action });
      
      state.todoList = action.payload;
      state.isLoading = false;
    },
    todosRequestFailed: (state, _) => {
      state.isLoading = false;
    }
  },
});

export const { todosRequested, todosReceived, todosRequestFailed } = todoSlice.actions;
export default todoSlice.reducer;

export const selectTodos = (state: RootState) => state.entities.todos.todoList;

export const selectIsLoading = (state: RootState) => state.entities.todos.isLoading;

export const loadTodos = () => requestStarted({
  url: 'https://jsonplaceholder.typicode.com/todos',
  onStart: todosRequested.type,
  onSuccess: todosReceived.type,
  onError: todosRequestFailed.type,
});