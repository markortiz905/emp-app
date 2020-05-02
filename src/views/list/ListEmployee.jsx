import React, { useState, useEffect } from "react";
import FlatList from "flatlist-react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

export default function ListEmployee(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { history } = props;

   useEffect(() => {
    document.title = "Employees List";
    if (Array.isArray(employees) && employees.length) {
      return; 
    }
    const url = "http://dummy.restapiexample.com/api/v1/employees" 
    console.log("fetching employee " + url);
    fetch(url)
      .then((res) => res.json())
      .then(
        (resp) => {
          setEmployees(resp.data)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setLoaded(false)
        }
      );
  }, [employees,setEmployees,loaded,setLoaded]);

  if ( ! sessionStorage.getItem("user")) {
    history.push('/login');
  }

  const handleFilter = (employee, index) => {
    return employee.employee_name?.toLowerCase()?.includes(searchTerm?.toLowerCase());
  };

  const detailsHandler = (id) => {
    history.push("/details/" + id);
  };

  const renderPerson = (person, idx) => {
    return (
      <ListGroup.Item
        onClick={(e) => detailsHandler(person.id)}
        action
        key={`${person.employee_name}-${idx}`}
      >
        <Row>
          <Col style={{ textAlign: "left" }}>
            <b>{person.employee_name}</b>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  const contentStyle = {
    paddingTop: 70,
    paddingRight: 20,
    paddingLeft: 20,
  };
  
  return (
    <Container>
      <Row>
        <Col>
          <Navigation/>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={contentStyle}>
            <SearchBar callback={setSearchTerm} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <FlatList
              list={employees ? employees : []}
              renderItem={renderPerson}
              filterBy={handleFilter}
            />
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
