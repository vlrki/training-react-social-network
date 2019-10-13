import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (        
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">Social Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/dialogs">Messages</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/music">Music</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;