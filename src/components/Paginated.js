import React from "react";
import { Pagination } from "react-bootstrap";
import { UseSelector, useSelector } from "react-redux";

function Paginated({ setPageCallback }) {
  const pagination = useSelector((state) => state.news.pagination);
  const pageItems = () => {
    const items = [];
    for (
      let i = Math.max(1, pagination.page - 2);
      i <= Math.min(pagination.page + 2, pagination.total);
      i++
    ) {
      items.push(
        <Pagination.Item
          active={i === pagination.page}
          onClick={() => setPageCallback(i)}
          key={i}
        >
          {i}
        </Pagination.Item>
      );
    }
    return items;
  };
  const firstEllipsisNeeded = pagination.page - 2 > 1;
  const lastEllipsisNeeded = pagination.page + 2 < pagination.total;

  return (
    <Pagination>
      <Pagination.First
        disabled={pagination.page === 1}
        onClick={() => setPageCallback(1)}
      />
      <Pagination.Prev
        disabled={pagination.page === 1}
        onClick={() => setPageCallback(pagination.prev)}
      />
      {firstEllipsisNeeded ? <Pagination.Ellipsis /> : ""}
      {pageItems()}
      {lastEllipsisNeeded ? <Pagination.Ellipsis /> : ""}
      <Pagination.Next
        disabled={pagination.page === pagination.total}
        onClick={() => setPageCallback(pagination.next)}
      />
      <Pagination.Last
        disabled={pagination.page === pagination.total}
        onClick={() => setPageCallback(pagination.total)}
      />
    </Pagination>
  );
}

export default Paginated;
