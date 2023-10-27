import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export class News extends Component {
  render() {
    const news = this.props.news;
    return (
      <div className={`row mb-1 pb-3 border-bottom`}>
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
            <div
              className="p-0 pe-3 bg-white border-0"
              style={{ fontSize: "0.7rem" }}
            >
              <small className="text-muted">{news.header}</small>
            </div>
            <div className="px-2 py-0 bg-white border-0">
              <Link
                to={`/news/${news._id}`}
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                {news.abstract}
              </Link>
            </div>
            <div
              className="px-2 bg-white border-0 text-muted ms-1"
              style={{
                fontSize: "0.6rem",
                direction: "ltr",
                textAlign: "end",
              }}
            >
              {news.time}
            </div>
            <div className="px-2 bg-white border-0">
              {news.keywords.map((kw) => (
                <Badge
                  className="mx-1"
                  bg="light"
                  style={{ fontSize: "0.7rem" }}
                  key={kw}
                >
                  {kw}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
