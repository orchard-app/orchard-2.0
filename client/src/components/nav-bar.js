// import React from "react";
// import { NavLink as RouterNavLink } from "react-router-dom";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

// import { useAuth0 } from "@auth0/auth0-react";
// import LogoutButton from "./logout-button";
// import LoginButton from "./login-button";

// const MainNav = () => (
//   <Nav className="mr-auto">
//     <Nav.Link
//       as={RouterNavLink}
//       to="/"
//       exact
//       activeClassName="router-link-exact-active"
//     >
//       Home
//     </Nav.Link>
//     <Nav.Link
//       as={RouterNavLink}
//       to="/browseListings"
//       exact
//       activeClassName="router-link-exact-active"
//     >
//       Browse Listings
//     </Nav.Link>
//     <Nav.Link
//       as={RouterNavLink}
//       to="/profile"
//       exact
//       activeClassName="router-link-exact-active"
//     >
//       Profile
//     </Nav.Link>
//     <NavDropdown title="Items" id="collasible-nav-dropdown">

//       <NavDropdown.Item href="/menu#additem">Add Item</NavDropdown.Item>
//       <NavDropdown.Item href="/viewitems">View Items</NavDropdown.Item>
//     </NavDropdown>
//     <NavDropdown title="Listings" id="collasible-nav-dropdown">
//       <NavDropdown.Item href="/menu#addlisting">Add Listing</NavDropdown.Item>
//       <NavDropdown.Item href="/menu#viewlistings">
//         View Listings
//       </NavDropdown.Item>

//       <NavDropdown.Item href="/addItem">Add Item</NavDropdown.Item>

//       <NavDropdown.Item href="/viewItems">View Items</NavDropdown.Item>

//       <NavDropdown.Item href="/viewitem">View Items</NavDropdown.Item>

//     </NavDropdown>
//     <NavDropdown title="Listings" id="collasible-nav-dropdown">
//       <NavDropdown.Item href="/addListing">Add Listing</NavDropdown.Item>
//       <NavDropdown.Item href="/viewListings">View Listings</NavDropdown.Item>
//     </NavDropdown>
//   </Nav>
// );

// const AuthNav = () => {
//   const { isAuthenticated } = useAuth0();

//   return <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>;
// };

// const NavBar = () => {
//   return (
//     <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
//       <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <MainNav />
//         <AuthNav />
//       </Navbar.Collapse>
//     </Navbar>

//     // <Navbar bg="light" expand="md">
//     //   <Container>
//     //     <Navbar.Brand as={RouterNavLink} className="" to="/" />
//     //     <MainNav />
//     //     <AuthNav />
//     //   </Container>
//     // </Navbar>
//   );
// };

// export default NavBar;

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
      <NavDropdown.Item href="/addItem">Add Item</NavDropdown.Item>
      <NavDropdown.Item href="/viewItems">View Items</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Listings" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/addListing">Add Listing</NavDropdown.Item>
      <NavDropdown.Item href="#viewlistings">View Listings</NavDropdown.Item>
    </NavDropdown>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>;
};

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <MainNav />
        <AuthNav />
      </Navbar.Collapse>
    </Navbar>

    // <Navbar bg="light" expand="md">
    //   <Container>
    //     <Navbar.Brand as={RouterNavLink} className="" to="/" />
    //     <MainNav />
    //     <AuthNav />
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
