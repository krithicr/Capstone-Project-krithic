// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavbarContext } from './NavbarContext';

const CustomNavbar = () => {
  const { navbarContent } = useNavbarContext();

  return (
    <Navbar bg="primary" variant="dark" className="p-3 m-1">
      <Navbar.Brand>{navbarContent}</Navbar.Brand>
      <Nav className="ms-auto align-items-center">
        <Nav.Link>Track Complaints</Nav.Link>
        <Nav.Link>Officers</Nav.Link>
        <Nav.Link className="d-flex align-items-center">
          <span className="me-2">User Name</span>
          <img
            src="https://via.placeholder.com/30"
            alt="User Icon"
            className="rounded-circle me-2"
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
