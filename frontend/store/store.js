import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middleware = [];

middleware.push(thunk);

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger');
  middleware.push(logger());
}

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(...middleware));
}

export default configureStore;
