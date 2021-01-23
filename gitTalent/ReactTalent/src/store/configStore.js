import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";

// use applyMiddleware to add the thunk middleware to the store
const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;