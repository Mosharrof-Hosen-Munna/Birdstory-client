import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBell,
  faBookmark,
  faUser,
  faComment,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const activeStyle = {
    color: "#00cec9 ",
  };
  return (
    <Navbar
      bg="white"
      className="py-0 d-none d-md-block"
      expand="lg"
      sticky="top"
    >
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
              <FontAwesomeIcon
                className="fa-2x d-block mx-auto text-center"
                icon={faHome}
              />
              Home
            </NavLink>
            <NavLink
              className="nav-link fw-bold"
              to="/bookmarks"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <FontAwesomeIcon
                className="fa-2x d-block mx-auto text-center"
                icon={faBookmark}
              />
              Bookmarks
            </NavLink>
            <NavLink
              className="nav-link fw-bold"
              to="/notifications"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <FontAwesomeIcon
                className="fa-2x d-block mx-auto text-center"
                icon={faBell}
              />
              Notifications
            </NavLink>
            <NavLink
              className="nav-link fw-bold"
              to="/profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <FontAwesomeIcon
                className="fa-2x d-block mx-auto text-center"
                icon={faUser}
              />
              My Profile
            </NavLink>
            <NavLink
              className="nav-link fw-bold"
              to="/dashboard"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <FontAwesomeIcon
                className="fa-2x d-block mx-auto text-center"
                icon={faChartLine}
              />
              Dashboard
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
