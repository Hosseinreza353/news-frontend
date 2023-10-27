import axios from "axios";
import {
  NEWS_REQ,
  NEWS_SUCC,
  NEWS_FAIL,
  ARTICLE_REQ,
  ARTICLE_SUCC,
  ARTICLE_FAIL,
} from "./types";

export const getNews = (page) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQ });
    // first fiqure what query params should be injected
    const { data } = await axios.get(
      `http://localhost:8000/news/?page=${page}`, {headers: {'Access-Control-Allow-Origin': '*'}}
    );
    dispatch({
      type: NEWS_SUCC,
      payload: {
        news: data.items,
        pagination: {
          total: data.total,
          page: data.page,
          size: data.size,
          next: data.next,
          prev: data.prev,
        },
      },
    });
  } catch (error) {
    dispatch({
      type: NEWS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_REQ });
    const { data } = await axios.get(`http://localhost:8000/news/${id}`);
    dispatch({
      type: ARTICLE_SUCC,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
