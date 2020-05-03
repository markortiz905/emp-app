import React, {useState, useEffect}from 'react';
import FlatList from "flatlist-react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";


import {
	Link
} from "react-router-dom";


const renderPerson = (person, idx) => {
	let to = "/details/" + person.id;
	return(
	      <ListGroup.Item
	     action
	    key={`${person.employee_name}-${idx}`}
	  >	
	  	
	  	<Link to={to}>
		    <Row>
		      <Col style={{ textAlign: "left" }}>
		        <b>{person.employee_name}</b>
		      </Col>
		    </Row>
	    </Link>
	  </ListGroup.Item>
	)};

const contentStyle = {
	paddingTop: 70,
	paddingRight: 20,
	paddingLeft: 20,
};

const EmployeesView = ({employees, loading, loadEmployees}) => {
	const [search, setSearch] = useState("");//only use in this component
	useEffect(() => {
		if (loading) {
			loadEmployees();
		}
	}, [loadEmployees, loading]);
	return(
		<Container>
	      <Row>
	        <Col>
	          <Navigation/>
	        </Col>
	      </Row>
	      <Row>
	      	<Col>
	      	{loading}
	      	</Col>
	      </Row>
	      <Row>
	        <Col>
	          <div style={contentStyle}>
	          	<SearchBar callback={setSearch} />
	          </div>
	        </Col>
	      </Row>
	      <Row>
	        <Col>
	          <ListGroup>
	            <FlatList
	              list={employees ? employees : []}
	              renderItem={renderPerson}
	              filterBy={(employee, idx) => employee.employee_name?.toLowerCase()?.includes(search?.toLowerCase()) }/>
	          </ListGroup>
	        </Col>
	      </Row>
	    </Container>
	)};

export default EmployeesView;