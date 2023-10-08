import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Stack } from "react-bootstrap";
import { getArticle } from "../actions/news";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ArticleScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { article, loading, error } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(getArticle(id));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="clearfix">
          <img
            src={article.thumbnail_url}
            className="col-4 float-start mb-3 ms-3"
            alt="..."
          />

          <p>
            <small className="text-muted">{article.header}</small>
          </p>

          <p>{article.abstract}</p>

          {article.body.split("\n").map((paraph, i) => (
            <p key={i}>{paraph}</p>
          ))}

          <div
            className="px-2 bg-white border-0 text-muted ms-1"
            style={{
              fontSize: "0.8rem",
              direction: "ltr",
              textAlign: "end",
            }}
          >
            {article.time}
          </div>

          <Stack direction="horizontal" gap={2}>
            {article.keywords.map((kw) => (
              <Badge pill bg="primary" key={kw}>
                {kw}
              </Badge>
            ))}
          </Stack>
        </div>
      )}
    </>
  );
}

export default ArticleScreen;
