import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";	

const contentStyle = {
	paddingTop: 70,
	paddingRight: 20,
	paddingLeft: 20,
};


const LoginView = ({}) => {
	const [login, setLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
	    event.stopPropagation();
	}
	const onclick = (event) => {
		if (login === "mark"  && userPassword === "admin") {
			sessionStorage.setItem("user", login);
			sessionStorage.setItem("login", true);
			window.location = '/list'
		} else {
			alert('error');
		}
	};
	return (
		<Container>
			<Row>
		        <Col>
		          <Navigation />
		        </Col>
		      </Row>
		      <Row>
		        <Col>
		          <div style={contentStyle}>
					<Form onSubmit={handleSubmit} >
					  <Form.Group controlId="formBasicEmail">
					    <Form.Label>Email address</Form.Label>
					    <Form.Control type="text" placeholder="Enter email/username" onBlur={ (e) => setLogin(e.target.value) } />
					    <Form.Text className="text-muted">
					      We`ll never share your email/username with anyone else.
					    </Form.Text>
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>Password</Form.Label>
					    <Form.Control type="password" placeholder="Password" onBlur={ (e) => setUserPassword(e.target.value) } />
					  </Form.Group>
					  <Button variant="primary" type="submit" onClick={onclick} >
					    Submit
					  </Button>
					</Form>
				</div>
		        </Col>
		      </Row>
			
		</Container>
	)};

export default LoginView;