import { applyMiddleware, combineReducers, createStore } from 'redux';
import { InitialBioState, bioReducer } from './features/bio';
import { InitialTaskState, taskReducer } from './features/task';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({ bio: bioReducer, task: taskReducer });

const store = createStore(
  rootReducer,
  {
    bio: InitialBioState,
    task: InitialTaskState,
  },
  applyMiddleware(thunk)
);

export default store;
