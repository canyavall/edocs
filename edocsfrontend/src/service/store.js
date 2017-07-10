//Main
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'redux-thunk'; // require the Middleware

//Reducers
import currentuser from './reducers/currentuser';
import categories from './reducers/categories';

const combinedRed = combineReducers({
  currentuser,
  categories
})

const store = createStore(combinedRed,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;
