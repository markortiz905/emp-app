import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";	
export default function Login(props) {

	const {history} = props;
	const [login, setLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");
	
	const contentStyle = {
	    paddingTop: 70,
	    paddingRight: 20,
	    paddingBottom: 50,
	    paddingLeft: 20,
	  };
	const handleSubmit = (event) => {
		event.preventDefault();
	    event.stopPropagation();
	}
	const onclick = (event) => {
	    if (login === "mark"  && userPassword === "admin") {
	    	sessionStorage.setItem("user", login);
	    	sessionStorage.setItem("login", true);
	    	history.push('/list');
	    } else {
	    	alert('error');
	    }
	  };
	const onBlurUserName = (e) => {
		setLogin(e.target.value);
	}
	const onBlurUserPass = (e) => {
		setUserPassword(e.target.value);
	}

	//logout anyone comes here
	sessionStorage.setItem("user", undefined);
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
					    <Form.Control type="text" placeholder="Enter email/username" onBlur={onBlurUserName} />
					    <Form.Text className="text-muted">
					      We`ll never share your email/username with anyone else.
					    </Form.Text>
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>Password</Form.Label>
					    <Form.Control type="password" placeholder="Password" onBlur={onBlurUserPass} />
					  </Form.Group>
					  <Button variant="primary" type="submit" onClick={onclick} >
					    Submit
					  </Button>
					</Form>
				</div>
		        </Col>
		      </Row>
			
		</Container>

		
	);
}