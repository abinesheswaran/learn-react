import bioReducer from './features/bioSlice';
import { taskReducer } from './features/task';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    bio: bioReducer,
    task: taskReducer,
  },
});

export default store;
