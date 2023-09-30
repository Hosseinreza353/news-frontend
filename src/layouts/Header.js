import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class Header extends Component {
  render() {
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">هوائی نیوز</Navbar.Brand>
          <Nav className="ms-auto me-3">
            <Nav.Link href="#home">خانه</Nav.Link>
            <Nav.Link href="#international">بین الملل</Nav.Link>
            <Nav.Link href="#aboutus">درباره ما</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
