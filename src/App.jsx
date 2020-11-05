import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import NavTerminal from "./components/navTerminal/NavTerminal";

import TopMenu from './components/topMenu/TopMenu';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <TopMenu />
      </header>
      <main className="mt-4">
        <Container>
          <NavTerminal className="mb-3" />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
    </Router>

  );
}

export default App;
