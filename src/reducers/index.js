import { combineReducers } from "redux";
import { newsReducer as news, articleReducer as article, bannerReducer as banner } from "./news";

export default combineReducers({
  news,
  article,
  banner,
});
