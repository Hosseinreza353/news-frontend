import React, { Component } from "react";
import { Card, Badge, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export class News extends Component {
  render() {
    const news = this.props.news;
    return (
      <div className="row g-1">
        <div className="col-3 overflow-hidden justify-content-center">
          <Link to={`/news/${news._id}`}>
            <img
              src={news.thumbnail_url}
              className="border-0 float-end d-inline-block mw-100"
              alt={news.header}
              // style={{ width: "200px" }}
            />
          </Link>
        </div>
        <div className="col-9">
          <div className="d-grid gap-3">
            <div className="p-0 pe-3 bg-white border-0">
              <small className="text-muted">{news.header}</small>
            </div>
            <div className="px-2 py-0 bg-white border-0">
              <Link to={`/news/${news._id}`}>{news.abstract}</Link>
            </div>
            <div className="px-2 bg-white border-0">
              <small
                className="text-muted p-0 text-start"
              >
                {news.time}
              </small>
            </div>
            <div className="px-2 bg-white border-0">
              <Stack direction="horizontal" gap={2}>
                {news.keywords.map((kw) => (
                  <Badge pill bg="primary">
                    {kw}
                  </Badge>
                ))}
              </Stack>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

/*
<Card>
  <Card.Header>{news.header}</Card.Header>
  <Link to={`/news/${news._id}`}>
    <Card.Img
      variant="top"
      className="vh-30"
      src={news.thumbnail_url}
    />
  </Link>
  <Card.Body>
    <Card.Text>{news.abstract}</Card.Text>
    <Stack direction="horizontal" gap={2}>
      {news.keywords.map((kw) => (
        <Badge pill bg="primary">
          {kw}
        </Badge>
      ))}
    </Stack>
  </Card.Body>
</Card>
*/
