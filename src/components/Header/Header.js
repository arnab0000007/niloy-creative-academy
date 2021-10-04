import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="nav-link text-danger fw-bolder"> Niloy Creative Academy</NavLink>
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link fw-bolder">Home</NavLink>
            <NavLink to="/services" className="nav-link fw-bolder">Services</NavLink>
            <NavLink to="/aboutus" className="nav-link fw-bolder">About Us</NavLink>
            <NavLink to="/contactus" className="nav-link fw-bolder">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
