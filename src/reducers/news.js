import {
  NEWS_REQ,
  NEWS_SUCC,
  NEWS_FAIL,
  ARTICLE_REQ,
  ARTICLE_SUCC,
  ARTICLE_FAIL,
  BANNER_REQ,
  BANNER_SUCC,
  BANNER_FAIL,
} from "../actions/types";

export const newsReducer = (state = { news: [], pagination: {} }, action) => {
  switch (action.type) {
    case NEWS_REQ:
      return { loading: true, ...state };
    case NEWS_SUCC:
      return {
        loading: false,
        news: action.payload.news,
        pagination: action.payload.pagination,
      };
    case NEWS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case ARTICLE_REQ:
      return { loading: true, ...state };
    case ARTICLE_SUCC:
      return { loading: false, article: action.payload };
    case ARTICLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bannerReducer = (state = { banner: [] }, action) => {
  switch (action.type) {
    case BANNER_REQ:
      return { loading: true, ...state };
    case BANNER_SUCC:
      return { loading: false, banner: action.payload };
    case BANNER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
