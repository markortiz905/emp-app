import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Navigation from "../components/Navigation";  

import {
	Link, useParams
} from "react-router-dom";

const renderLinkBtn = () => {
	const to = '/list';

	return (
		<Link to={to}>
			<Button >Done</Button>
		</Link>
	)
}

const contentStyle = {
	paddingTop: 70,
	paddingRight: 20,
	paddingLeft: 20,
};


const EmployeeDetailsView = ({employees}) => {
	let { id } = useParams();
	const employee = employees.find(emp => emp.id === id);

return (
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row style={contentStyle}>
        <Col>
          <Card style={{ width: '20rem' }} >
            <Card.Img variant="top" src={ employee.profile_image ? employee.profile_image : '/employee-placeholder.jpg' } className="img-thumbnail" />
            <Card.Body>
              <Card.Title>Employee Details</Card.Title>
                <Row>
                  <Col>Employee ID: </Col>
                  <Col>{employee.id}</Col>
                </Row>
                <Row>
                  <Col>Name:</Col>
                  <Col>{employee.employee_name}</Col>
                </Row>
                <Row>
                  <Col>Salary:</Col>
                  <Col>{employee.employee_salary}</Col>
                </Row>
                <Row>
                  <Col>Age:</Col>
                  <Col>{employee.employee_age}</Col>
                </Row>
              
              	{renderLinkBtn()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  )};

export default EmployeeDetailsView;