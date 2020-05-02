import React from "react";
import "./App.css";

import Login from "./views/components/Login";
import Logout from "./views/components/Logout";
import ListEmployee from "./views/list/ListEmployee";
import Details from "./views/details/Details";
import { Col } from "react-bootstrap";

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
              path="/details/:id"
              render={(routeProps) => (
                <ViewEmployee
                  {...routeProps}
                  addPaddingTop={addPaddingTop}
                />
              )}
            />
            <Route
              path="/list"
              render={(routeProps) => (
                <ListEmployee
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
                <Login
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
