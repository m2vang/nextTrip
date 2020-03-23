import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers/index';

export const store = createStore (
    rootReducer,
    undefined,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
)