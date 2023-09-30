import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Stack } from "react-bootstrap";

function NewsDetail({ history }) {
  const { id } = useParams();
  const news = useSelector((state) =>
    state.news.news.find((n) => n._id === id)
  );
  return (
    <div className="clearfix">
      <img
        src={news.thumbnail_url}
        className="col-4 float-start mb-3 ms-3"
        alt="..."
      />

      <p><small className="text-muted">{news.header}</small></p>

      <p>{news.abstract}</p>

      {news.body.split("\n").map((paraph) => (
        <p>{paraph}</p>
      ))}

      <small className="text-muted p-0 text-start">{news.time}</small>

      <Stack direction="horizontal" gap={2}>
        {news.keywords.map((kw) => (
          <Badge pill bg="primary">
            {kw}
          </Badge>
        ))}
      </Stack>
    </div>
  );
}

export default NewsDetail;

/*
<Stack gap={3}>
  <Card>
    <Card.Header>{news.header}</Card.Header>
    <Card.Img variant="top" src={news.thumbnail_url} />
    <Card.Body>
      <Card.Text>{news.abstract}</Card.Text>
      <Card.Text>
        {news.body.split("\n").map((paraph) => (
          <p>
            {paraph}
          </p>
        ))}
      </Card.Text>
      <Stack direction="horizontal" gap={2}>
        {news.keywords.map((kw) => (
          <Badge pill bg="primary">
            {kw}
          </Badge>
        ))}
      </Stack>
    </Card.Body>
  </Card>
</Stack>
*/
