import { applyMiddleware, createStore, combineReducers } from "redux";
import usersReducer from "./reducers/users-reducer";
import postsReducer from "./reducers/post-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    users: usersReducer,
    posts: postsReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//@ts-ignore

export default store;