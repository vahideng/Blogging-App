import { combineReducers } from "redux";
import postReducer from "./reducer-post";
const rootReducer = combineReducers({
  posts: postReducer
});

export default rootReducer;
