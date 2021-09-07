import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '..';
import { selectIsLoggedIn } from './userSlice';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const loadTodos = createAsyncThunk<Todo[], Partial<{ userId: number }>, {state: RootState }>(
  'todos/get',
  async ({ userId }, { getState }) => {
    if (selectIsLoggedIn(getState())) {
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

    throw 'You are not logged in!';
  }
);

export const addTodo = createAsyncThunk<
  Todo,
  Required<Todo>,
  { state: RootState }
>('todos/add', async (todo, { getState }) => {
  if (selectIsLoggedIn(getState())) {
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

  throw 'You are not logged in!';
});

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


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: { },
  extraReducers: builder => {
    builder.addCase(loadTodos.fulfilled, (todos, { payload }) => {
      todos.todoList = payload;
    });

    builder.addCase(loadTodos.rejected, (todos, { error }) => {
      todos.error = error.message;
    });

    builder.addCase(addTodo.fulfilled, (todos, { payload }) => {
      todos.todoList.push(payload);
    });

    builder.addCase(addTodo.rejected, (todos, { error }) => {
      todos.error = error.message;
    });

    builder.addMatcher<PendingAction>(
      action => action.type.endsWith('/pending'),
      (state, _) => {
        state.isLoading = true;
      }
    );

    builder.addMatcher<FulfilledAction>(
      action => action.type.endsWith('/fulfilled'),
      (state, _) => {
        state.isLoading = false;
      }
    );

    builder.addMatcher<RejectedAction>(
      action => action.type.endsWith('/rejected'),
      (state, _) => {
        state.isLoading = false;
      }
    );
    
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

export const selectTodos = (state: RootState) => state.entities.todos.todoList;

export const selectIsLoading = (state: RootState) =>
  state.entities.todos.isLoading;