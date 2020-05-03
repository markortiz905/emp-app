import React, { useEffect } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";

export default function Logout(props) {
  const contentStyle = {
    paddingTop: 70,
    paddingRight: 20,
    paddingBottom: 50,
    paddingLeft: 20,
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <Container style={contentStyle}>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            <Nav.Link onClick={() => props.action()} href="/login">
              Login
            </Nav.Link>
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
