import { Navbar, Nav } from "react-bootstrap";

import React, { useState, useEffect } from "react";
//import { FaHamburger } from 'react-icons/fa';
//import SideBar from '../components/SideBar';
import "bootstrap/dist/css/bootstrap.min.css";
//import 'font-awesome/css/font-awesome.min.css';

//import Lists from "./Lists";
//import Login from "./Login";
//import Login from "./Login";
//import Details from "./Details";

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
