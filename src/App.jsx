import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Container, Navbar, Nav, Row, Col, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";


const Home = () => (
  <div>
    hello
  </div>
)

const Cv = () => {

  const [loaded, load] = useState(false);


  return (
    <>
      {!loaded && (
        <Col md="12" className="text-center">
          <Spinner animation="border" className="text-center" />
        </Col>
      )}
      <iframe
        src="https://maemresen.github.io/resume/cv_mehmet_arif_emre_sen.pdf"
        title="title"
        frameborder={(loaded) ? "1" : "0"}
        onLoad={() => load(true)}
        style={{
          width: "100%",
          height: "90vh",
        }}>
        Presss me: <a href="https://maemresen.github.io/resume/cv_mehmet_arif_emre_sen.pdf">Download PDF</a>
      </iframe>
    </>
  )
};


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
              {/* <Col md="12">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/cv" className="nav-link">CV</Link>
                  </Nav>
                </Navbar.Collapse>
              </Col> */}
            </Row>
          </Col>
        </Navbar>

      </header>
      <main className="mt-4">
        <Container>
          <Switch>
            <Route exact path="/" component={Cv}></Route>
          </Switch>
        </Container>
      </main>
    </Router>
  );
};

export default App;
