import { combineReducers, createStore } from 'redux';
import { InitialBioState, bioReducer } from './features/bio';
import { InitialTaskState, taskReducer } from './features/task';

const rootReducer = combineReducers({ bio: bioReducer, task: taskReducer });

const store = createStore(rootReducer, {
  bio: InitialBioState,
  task: InitialTaskState,
});

export default store;
