import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '..';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface TodosState {
  todoList: Todo[];
  isLoading: boolean;
  error?: string;
}

const initialState: TodosState = {
  todoList: [],
  isLoading: false,
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>


export const loadTodos = createAsyncThunk<Todo[], Partial<{ userId: number }>>(
  'todos/get',
  async ({ userId }, { dispatch, requestId, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos${
          userId ? `?userId=${userId}` : ''
        }`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const addTodo = createAsyncThunk<Todo, Required<{ todo: Todo }>>(
  'todos/add',
  async ({ todo }, { dispatch, requestId }) => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/todos`,
        todo
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: { },
  extraReducers: builder => {
    builder.addCase(loadTodos.fulfilled, (todos, { payload }) => {
      todos.todoList = payload;
      todos.isLoading = false;
    });
    builder.addCase(loadTodos.rejected, (todos, { error }) => {
      todos.error = error.message;
      todos.isLoading = false;
    });
    builder.addCase(addTodo.fulfilled, (todos, { payload }) => {
      todos.todoList.push(payload);
      todos.isLoading = false;
    });
    builder.addCase(addTodo.rejected, (todos, { error }) => {
      todos.error = error.message;
      todos.isLoading = false;
    });
    builder.addMatcher<PendingAction>(
      action => action.type.endsWith('/pending'),
      (state, action) => {
        state.isLoading = true;
        console.log(`type: ${action.type}`);
      }
    );
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

export const selectTodos = (state: RootState) => state.entities.todos.todoList;

export const selectIsLoading = (state: RootState) =>
  state.entities.todos.isLoading;