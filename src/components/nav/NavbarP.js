import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'

const NavbarP = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="success" variant="dark">
    <Container>
      <div href="/"><img className='logo_imgpng' src={logo} alt="Logo" /></div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/steel-building">Steel Buildings</NavDropdown.Item>
            <NavDropdown.Item href="/steel-building-design">Design</NavDropdown.Item>
            <NavDropdown.Item href="/steel-building-fabrication">Fabrication</NavDropdown.Item>
            <NavDropdown.Item href="/steel-building-eraction">Eraction</NavDropdown.Item>
            <NavDropdown.Item href="/steel-building-landscapes">Land Scape</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/agricultural-products">Agricutural Products</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/ourwork">Our Work</Nav.Link>
          <Nav.Link eventKey={2} href="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarP