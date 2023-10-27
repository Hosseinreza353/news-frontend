import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

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
          linkClassName={`${i === pagination.page ? "bg-primary" : "bg-white text-dark"} mx-0`}
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
    <>
      {pagination.total > 1 && (
        <Pagination size="sm" className="justify-content-center">
          <Pagination.First
            disabled={pagination.page === 1}
            onClick={() => setPageCallback(1)}
            linkClassName="bg-white text-dark mx-0"
          />
          <Pagination.Prev
            disabled={pagination.page === 1}
            onClick={() => setPageCallback(pagination.prev)}
            linkClassName="bg-white text-dark mx-0"
          />
          {firstEllipsisNeeded ? (
            <Pagination.Ellipsis linkClassName="bg-white text-dark mx-0" />
          ) : (
            ""
          )}
          {pageItems()}
          {lastEllipsisNeeded ? (
            <Pagination.Ellipsis linkClassName="bg-white text-dark mx-0" />
          ) : (
            ""
          )}
          <Pagination.Next
            disabled={pagination.page === pagination.total}
            onClick={() => setPageCallback(pagination.next)}
            linkClassName="bg-white text-dark mx-0"
          />
          <Pagination.Last
            disabled={pagination.page === pagination.total}
            onClick={() => setPageCallback(pagination.total)}
            linkClassName="bg-white text-dark mx-0"
          />
        </Pagination>
      )}
    </>
  );
}

export default Paginated;
