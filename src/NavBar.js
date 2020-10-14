import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div id="nav">
      <Navbar expand="lg" variant="light" bg="light" justify="true">
        <Navbar.Brand>Test</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavBar;
