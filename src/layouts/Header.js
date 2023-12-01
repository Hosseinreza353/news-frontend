import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <Row
          style={{ display: "block", height: "100px" }}
          className="p-0 m-0 bg-primary"
        >
          <Col></Col>
        </Row>
        <Row>
          <Navbar bg="primary" data-bs-theme="light" className="pb-0 mb-1">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <span className="my-nav-brand">هوائی نیوز</span>
              </Navbar.Brand>
              <Nav
                activeKey={window.location.pathname}
                variant="pills"
                className="ms-auto me-5"
              >
                <Nav.Link as={Link} to="/" className="my-nav-links">
                  خانه
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="my-nav-links">
                  بین الملل
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="my-nav-links">
                  درباره ما
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Row>
      </>
    );
  }
}

export default Header;
