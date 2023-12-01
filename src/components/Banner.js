import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBanner } from "../actions/news";
import Loader from "./Loader";
import Message from "./Message";

function Banner() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const dispatch = useDispatch();
  const { banner, loading, error } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {loading === false && (
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          data-bs-theme="dark"
        >
          {banner.map((bannerItem) => (
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={bannerItem.thumbnail_url}
                alt={`/news/${bannerItem._id}`}
                style={{
                  height: "420px",
                }}
              />
              <Carousel.Caption>
                <div className="my-caption">
                  <Link
                    to={`/news/${bannerItem._id}`}
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <h3>{bannerItem.header.split(" | ")[1]}</h3>
                  </Link>
                  <p>{bannerItem.header.split(" | ")[0]}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default Banner;
