
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Home from  "./pages/Home";
import Cv from  "./pages/Cv";


const App = () => {
  return (
    <Router>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" className="text-center">
          <Col md="12">
            <Row>
              <Col md="12">
                <Navbar.Brand>
                  Mehmet Arif Emre Şen
              </Navbar.Brand>
              </Col>
              <Col md="12">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/cv" className="nav-link">CV</Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Col>
        </Navbar>

      </header>
      <main className="mt-4">
        <Container>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/cv" component={Cv}></Route>
          </Switch>
        </Container>
      </main>
    </Router>
  );
};

export default App;
