import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { IS_DEV } from './constants';
import rootReducer from './rootReducer';

const middlewares = [thunk];

if (IS_DEV) {
  middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
