import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from "./reducers/RootReducer";

const compose = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(reducers, compose)

export default store;