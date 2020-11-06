import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from './components/TopMenu';


import './App.css';

function App() {
  return (
    <Router>
      <header>
        <TopMenu />
      </header>
      <main className="mt-4">
        <Container>
          sdf
        </Container>
      </main>
    </Router>

  );
}

export default App;
