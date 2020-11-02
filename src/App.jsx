
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.scss";

import Home from "./pages/Home";
import Cv from "./pages/Cv";


const App = () => {
  return (
    <Router>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" className="text-center">
          <Container>
            <Navbar.Brand>
              Mehmet Arif Emre Şen
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink exact={true} to="/" activeClassName="active" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/cv" activeClassName="active" className="nav-link">
                  CV
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
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
