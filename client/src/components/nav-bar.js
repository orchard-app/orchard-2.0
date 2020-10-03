import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/additem"
      exact
      activeClassName="router-link-exact-active"
    >
      Browse Listings
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <NavDropdown title="Items" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#additem">Add Item</NavDropdown.Item>
        <NavDropdown.Item href="#viewitem">View Items</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Listings" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#addlisting">Add Listing</NavDropdown.Item>
        <NavDropdown.Item href="#viewlistings">View Listings</NavDropdown.Item>
    </NavDropdown>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
