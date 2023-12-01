import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container fluid>
      <div
        style={{
          display: "block",
          fontSize: "0.7rem",
          color: "white",
          minHeight: "30rem",
        }}
        className="bg-primary mt-2 pt-4"
      >
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/" style={{ textDecoration: "none", fontSize: "0.8rem" }}>
              خانه
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", fontSize: "0.8rem" }}>
              بین الملل
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", fontSize: "0.8rem" }}>
              درباره ما
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Sidebar;
