import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (        
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">Social Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link as={NavLink} to="/">Home</Nav.Link></Nav.Item>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
            <Nav.Link as={NavLink} to="/dialogs">Dialogs</Nav.Link>
            <Nav.Link as={NavLink} to="/news">News</Nav.Link>
            <Nav.Link as={NavLink} to="/music">Music</Nav.Link>
            <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;