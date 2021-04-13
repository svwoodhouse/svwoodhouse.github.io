import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../Header/Header.css';
import { Switch, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'

const header = () => {
  return (
  <Navbar expand="md" variant="dark" fixed="top" className="NavBarStyle">
  <LinkContainer to={process.env.PUBLIC_URL + '/'}>
    <Navbar.Brand>sydnee.woodhouse@ubuntu~</Navbar.Brand>
  </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/About"><Nav.Link className ="linkStyle">About Me</Nav.Link></LinkContainer>
        <LinkContainer to="/Projects"><Nav.Link className ="linkStyle">Projects</Nav.Link></LinkContainer>
        <LinkContainer to="/Contact"><Nav.Link className ="linkStyle">Contact</Nav.Link></LinkContainer>
        <Nav.Link className ="linkStyle" href="src\assets\Woodhouse, Sydnee.pdf" download>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default header;