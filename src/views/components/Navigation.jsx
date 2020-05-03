import { Navbar, Nav } from "react-bootstrap";

import React from "react";

function link () {
  if (sessionStorage.getItem("user") == null || sessionStorage.getItem("user") === 'undefined') {
    return <Nav><Nav.Link href="/login">Login</Nav.Link></Nav>
  } else {
    return <Nav><Nav.Link href="/logout">Logout</Nav.Link></Nav>
  }
}

export default function Navigation(props) {
  return (
    <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Employee App</Navbar.Brand>
      {link()}
    </Navbar>
  );
}
