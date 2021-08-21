import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import { requestStarted } from '../actions/requestApi';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface TodosState {
  todoList: Todo[];
  isLoading: boolean;
}

const initialState: TodosState = {
  todoList: [],
  isLoading: false,
};

export const todosSlice = createSlice({
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
    },
    todoAdded: (state, action: PayloadAction<Todo>) => {
      console.log({action});
      
      state.todoList.push(action.payload);
    },
  },
});

export const { todosRequested, todosReceived, todosRequestFailed, todoAdded } = todosSlice.actions;
export default todosSlice.reducer;

export const selectTodos = (state: RootState) => state.entities.todos.todoList;

export const selectIsLoading = (state: RootState) =>
  state.entities.todos.isLoading;

export const loadTodos = () =>
  requestStarted({
    url: 'https://jsonplaceholder.typicode.com/todos',
    onStart: todosRequested.type,
    onSuccess: todosReceived.type,
    onError: todosRequestFailed.type,
  });

export const addTodo = (todo: Todo) =>
  requestStarted({
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'POST',
    data: todo,
    onSuccess: todoAdded.type,
  });
