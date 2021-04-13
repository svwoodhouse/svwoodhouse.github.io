import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../Header/Header.css';

const header = () => {
  return (
  <Navbar expand="md" variant="dark" fixed="top" className="NavBarStyle">
    <Navbar.Brand href="/">sydnee.woodhouse@ubuntu~</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className ="linkStyle" href="/aboutme">About Me</Nav.Link>
        <Nav.Link className ="linkStyle" href="/projects">Projects</Nav.Link>
        <Nav.Link className ="linkStyle" href="/contact">Contact</Nav.Link>
        <Nav.Link className ="linkStyle" href="src\assets\Woodhouse, Sydnee.pdf" download>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default header;