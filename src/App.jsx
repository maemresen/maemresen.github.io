import React from 'react';

import { Container, Button, Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { TopMenu, InfoCard } from './components'
import { wallpaper } from './assets';

function App() {
  return (
    <div id="app" className="vh-100" style={{
      background: `url(${wallpaper})`,
      overflow: "auto"
    }}>
      <div id="overlay" className="vh-100" style={{
        backgroundColor: "rgba(30, 30, 30, 0.6)"
      }}>
        <header>
          <TopMenu />
        </header>
        <main className="py-4">
          <Container fluid>
            <Row>
              <Col md="12">
                <InfoCard
                  header="About Me"
                  footer="About Me"
                >
                  I am an entrepreneur who wants to learn new technologies and use them to make things easier.
                  <br />
                  My life goal is having my own job and creating a software community that everyone can get benefit from.
                  <br />
                  I have deep interest to Object Oriented Paradigm
                </InfoCard>
              </Col>
              <Col md="6">
                <InfoCard />
              </Col>
              <Col md="6">
                <InfoCard />
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </div>

  );
}

export default App;
