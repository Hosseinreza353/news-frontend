import axios from "axios";
import { GET_NEWS } from "./types";

export const getNews = () => (dispatch) => {
  axios
    .get("http://localhost:8000/news/")
    .then((resp) => {
      dispatch({
        type: GET_NEWS,
        payload: resp.data,
      });
    })
    .catch((err) => console.log(err));
};
