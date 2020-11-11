import React from 'react';

import { Container, Button, Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { TopMenu } from './components'

import './App.css';
import { wallpaper } from './assets';

function App() {
  return (
    <div id="app" className="vh-100" style={{
      background: `url(${wallpaper})`,
    }}>
      <header>
        <TopMenu />
      </header>
      <main>
        <Col md="12">
          <Row>
            <Col md="6">
              <div className="py-2">
                <Card className="bg-dark">
                  <Card.Header className="text-white" as="h5">Featured</Card.Header>
                  <Card.Body className="bg-light">
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md="6">
            </Col>
          </Row>
        </Col>
        <Container fluid>
        </Container>.
        </main>
    </div>

  );
}

export default App;
