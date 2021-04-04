import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const header = () => {
  return (
  <Navbar bg="dark" expand="md" variant="dark" fixed="top">
    <Navbar.Brand href="#home">Sydnee Woodhouse</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#project">Projects</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="src\assets\Woodhouse, Sydnee.pdf" download>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default header;