import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Row, Col, Container } from "react-bootstrap";
import News from "../components/News";
import { getNews } from "../actions/news";
import Paginated from "../components/Paginated";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Banner from "../components/Banner";
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
        <Col sm={8}>
          <Row>
            <Col>
              <Banner />
            </Col>
          </Row>
          <Row>
            <Col>
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
          </Row>
        </Col>
        <Col>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
