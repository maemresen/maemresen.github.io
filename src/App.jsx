
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";


import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.scss";

import NavTerminal from "./components/NavTerminal";

import Home from "./pages/Home";
import Cv from "./pages/Cv";
import { useState } from "react";


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
                <div className={`d-inline-block text-secondary`} >
                  <FontAwesomeIcon icon={faTerminal} className="ml-3 mt-1" size="2x" />
                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
      <main className="mt-4">
        <Container>
          <NavTerminal className="mb-3" />
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
