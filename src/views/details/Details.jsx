import React, {useState , useEffect} from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Navigation from "../components/Navigation";  

export default function Details(props) {
  const contentStyle = {
    paddingTop: 70,
    paddingRight: 20,
    paddingBottom: 50,
    paddingLeft: 20
  };

  const {history, employeeId} = props;
  const [employee, setEmployee] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "Employee Details";
    //for some reason i am getting 400 bad request using this api so I used the get all emp instead for demo sakes
    //"http://dummy.restapiexample.com/api/v1/employee/" + employeeId;
    const url = "http://dummy.restapiexample.com/api/v1/employees" 
    console.log("fetching employee " + url);
    fetch( url )
      .then((res) => res.json())
      .then(
        (resp) => {
          setEmployee(resp.data.find((emp) => emp.id === employeeId));
          setLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
          setLoaded(false)
        }
      );
  }, [employeeId]);

  if ( sessionStorage.getItem("user") == null || sessionStorage.getItem("user") === 'undefined' ) {
    history.push('/login');
  }

  const goBack = () => {
    history.push("/list");
  };

  const {profile_image,id,employee_name,employee_salary,employee_age} = employee;
  return (
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row style={contentStyle}>
        <Col>
          <Card style={{width: "100%"}} >
            <Card.Img variant="top" src={ profile_image ? profile_image : '/employee-placeholder.jpg' } className="img-thumbnail" />
            <Card.Body>
              <Card.Title>Employee Details</Card.Title>
              
                <Row>
                  <Col>Employee ID: </Col>
                  <Col>{id}</Col>
                </Row>
                <Row>
                  <Col>Name:</Col>
                  <Col>{employee_name}</Col>
                </Row>
                <Row>
                  <Col>Salary:</Col>
                  <Col>{employee_salary}</Col>
                </Row>
                <Row>
                  <Col>Age:</Col>
                  <Col>{employee_age}</Col>
                </Row>
              
              <Button onClick={(e) => goBack()} variant="primary">Done</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}
