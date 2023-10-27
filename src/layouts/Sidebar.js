import React from "react";
import { Container } from "react-bootstrap";

function Sidebar() {
  return (
    <Container fluid>
      <div
        style={{ minHeight: "100px", display: "block", fontSize: "0.7rem" }}
        className="bg-info border-1 border-top"
      >
        حسینم
      </div>
    </Container>
  );
}

export default Sidebar;
