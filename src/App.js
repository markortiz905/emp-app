import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginView from "./views/components/LoginView";
import Logout from "./views/components/Logout";
import Details from "./views/details/Details";
import Employees from "./views/list/Employees";
import EmployeeDetails from "./views/details/EmployeeDetails";
import { Col } from "react-bootstrap";
import { updateEmployees } from './redux/actions/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addPaddingTop: false
    };
  }

  resize() {
    this.setState({ addPaddingTop: window.innerWidth <= 760 });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  render() {
    const { addPaddingTop } = this.state;
    if (sessionStorage.getItem("user") == null || sessionStorage.getItem("user") === 'undefined') {
        if ( ! window.location.href.includes("login")) {
           window.location  = "/login";
        }
    } else {
      this.props.store.dispatch(updateEmployees());//.then( () => console.log("Done fetching!"));
    }
    return (
      <Router>
        <div>
          <Col>
            
          </Col>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route
              path="/list"
              render={(routeProps) => (
                <Employees
                  store={this.props.store}
                  {...routeProps}
                  addPaddingTop={addPaddingTop}
                />
              )}
            />
            <Route
              path="/details/:id"
              render={(routeProps) => (
                <EmployeeDetails
                  {...routeProps}
                  addPaddingTop={addPaddingTop}
                />
              )}
            />
            <Route
              expact
              path="/logout"
              render={(routeProps) => (
                <Logout
                  {...routeProps}
                  action={this.logout} 
                  addPaddingTop={addPaddingTop}
                  
                />
              )}
            />
            <Route
              expact
              path="/login"
              render={(routeProps) => (
                <LoginView
                  {...routeProps}
                  action={this.login} 
                  addPaddingTop={addPaddingTop}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

function ViewEmployee(props) {
  let { id } = useParams();

  return (
    <div>
      <Details
        {...props}
        isLoggedIn="true"
        addPaddingTop={props.addPaddingTop}
        employeeId={id}
      />
    </div>
  );
}

export default App;
