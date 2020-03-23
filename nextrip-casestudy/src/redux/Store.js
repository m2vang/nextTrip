import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

export const store = createStore (
    rootReducer,
    undefined,
    applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
)