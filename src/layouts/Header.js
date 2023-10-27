import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <Row
          style={{ display: "block", height: "100px" }}
          className="p-0 m-0 bg-info"
        >
          <Col></Col>
        </Row>
        <Row>
          <Navbar bg="info" data-bs-theme="light" className="pb-0">
            <Container>
              <Navbar.Brand href="#home">
                هوائی نیوز
              </Navbar.Brand>
              <Nav className="ms-auto me-5">
                <Nav.Link href="#home" className="my-nav-links">
                  خانه
                </Nav.Link>
                <Nav.Link href="#international" className="my-nav-links">
                  بین الملل
                </Nav.Link>
                <Nav.Link href="#aboutus" className="my-nav-links">
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
