import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

// reduxImmutableStateInvariant is a redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches

export const store = createStore (
    rootReducer,
    undefined,
    applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
);