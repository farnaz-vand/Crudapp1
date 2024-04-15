import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../../features/todos/TodosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
