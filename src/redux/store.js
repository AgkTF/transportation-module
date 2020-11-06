import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer from './homepage/home-reducer';

const middlewares = [thunk, logger];

// if (process.env.NODE_ENV === 'production') {
//   middlewares.push(logger);
// }

const store = createStore(homeReducer, applyMiddleware(...middlewares));

export default store;
