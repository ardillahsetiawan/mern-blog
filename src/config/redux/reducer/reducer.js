import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createBlogReducer";

const reducer = combineReducers({
  createBlogReducer,
  globalReducer,
  homeReducer,
});

export default reducer;
