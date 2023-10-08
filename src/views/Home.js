import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "react-bootstrap";
import News from "../components/News";
import { getNews } from "../actions/news";
import Paginated from "../components/Paginated";
import Loader from "../components/Loader";

function HomeScreen() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

  //   const paginate = useCallback(
  //     (e) => {
  //       setPage(Number(e.target.text));
  //     },
  //     [setPage]
  //   );

  useEffect(() => {
    // console.log(`page: ${page}`)
    dispatch(getNews(page));
  }, [page, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Stack gap={2} className="py-2">
          {news.map((news) => (
            <News news={news} key={news._id} />
          ))}
          <Paginated setPageCallback={setPage} />
        </Stack>
      )}
    </>
  );
}

export default HomeScreen;
