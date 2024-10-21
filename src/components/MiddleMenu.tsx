'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

// MiddleMenu Component
const MiddleMenu = () => (
  <Navbar expand="lg" className="navbar-category">
    <Nav className="mx-auto d-flex justify-content-center felx-row">
      <NavDropdown title="MEN" id="menDropdown">
        <NavDropdown.Item href="#">T-shirts</NavDropdown.Item>
        <NavDropdown.Item href="#">Shorts</NavDropdown.Item>
        <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="WOMEN" id="womenDropdown">
        <NavDropdown.Item href="#">Dresses</NavDropdown.Item>
        <NavDropdown.Item href="#">Tops</NavDropdown.Item>
        <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="KIDS" id="kidsDropdown">
        <NavDropdown.Item href="#">Toys</NavDropdown.Item>
        <NavDropdown.Item href="#">Clothes</NavDropdown.Item>
        <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="BRANDS" id="brandsDropdown">
        <NavDropdown.Item href="#">Nike</NavDropdown.Item>
        <NavDropdown.Item href="#">Adidas</NavDropdown.Item>
        <NavDropdown.Item href="#">Puma</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#">SEARCH</Nav.Link>
    </Nav>
  </Navbar>
);

export default MiddleMenu;
