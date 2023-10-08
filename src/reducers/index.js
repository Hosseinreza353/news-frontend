import { combineReducers } from "redux";
import { newsReducer as news, articleReducer as article } from "./news";

export default combineReducers({
  news,
  article,
});
