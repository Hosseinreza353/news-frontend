import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Row, Col, Container } from "react-bootstrap";
import News from "../components/News";
import { getNews } from "../actions/news";
import Paginated from "../components/Paginated";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Sidebar from "../layouts/Sidebar";

function HomeScreen() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews(page));
  }, [page, dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col sm={9}>
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
        </Col>
        <Col sm={1}></Col>
        <Col sm={2}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
