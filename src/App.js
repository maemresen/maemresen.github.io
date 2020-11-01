import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const Home = () => <div>home</div>;

const Cv = () => <div>cv</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/cv" className="nav-link">CV</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/cv" component={Cv}></Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
