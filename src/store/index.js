
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/root-reducer';

function getMiddlewares() {
  return [thunkMiddleware];
}

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

function getStoreEnhancer() {
  return composeEnhancers(applyMiddleware(...getMiddlewares()));
}

export function createReduxStore(initialState) {
  let store = createStore(reducers, initialState, getStoreEnhancer());

  return store;
}

