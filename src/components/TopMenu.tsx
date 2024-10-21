'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Cart, Facebook, House, Instagram, Person, Pinterest, Search, Twitter } from 'react-bootstrap-icons';

// TopMenu Component
const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container className="d-flex justify-content-between align-items-center">
      <Nav className="me-auto">
        <Nav.Link href="#"><Facebook /></Nav.Link>
        <Nav.Link href="#"><Twitter /></Nav.Link>
        <Nav.Link href="#"><Pinterest /></Nav.Link>
        <Nav.Link href="#"><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="#"><House /></Nav.Link>
        <Nav.Link href="#"><Search /></Nav.Link>
        <Nav.Link href="#"><Person /></Nav.Link>
        <Nav.Link href="#"><Cart /></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
