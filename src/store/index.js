import { combineReducers, createStore } from 'redux';

import { postReducer } from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer);
