import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Navegacion = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="../assets/red-icon.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <div></div>
        <Nav className="ml-auto">
          <Nav.Link href="/">Mayo Forms</Nav.Link>
          <Nav.Link href="/counter">Mayo Counter</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    );
}
