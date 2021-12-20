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

const MobileNavigation = () => {
  const activeStyle = {
    color: "#00cec9 ",
  };

  const navStyle = {
    // position: " -webkit-sticky" /* Safari */,
    // position: "sticky",
    // bottom: "0px",
    position: "fixed",
    bottom: " 0px",
    zIndex: "100",
  };
  return (
    <Navbar style={navStyle} className="d-block w-100 bg-white d-md-none">
      <Nav className="ms-auto justify-content-between">
        <NavLink
          className="nav-link fw-bold"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <FontAwesomeIcon
            className="fa-2x d-block mx-auto text-center"
            icon={faHome}
          />
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
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default MobileNavigation;
