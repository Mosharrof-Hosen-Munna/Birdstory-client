import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeStyle = {
    color: "#00cec9 ",
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-blue-green birdstory-logo fw-bold">Birdstory</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className="nav-link fw-bold"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link fw-bold"
              to="/profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Profile
            </NavLink>
            <NavLink
              className="nav-link fw-bold"
              to="/dashboard"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Dashboard
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
