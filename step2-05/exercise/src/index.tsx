import { reducer } from './reducers';
import { createStore } from 'redux';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, {}, composeWithDevTools());

// TODO: try doing some store.dispatch() calls here
store.dispatch(actions.addTodo('buy a bike'));
// HINT: remember to use the functions inside "actions" object

console.log(store.getState());
