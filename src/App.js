import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const Home = () => <div>home</div>;

const App = () => {
  return (
    <Router>
      <div id="App" className="bg-light">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="mx-auto">
              Mehmet Arif Emre Şen
            </Navbar.Brand>
          </Navbar>
        </header>
        <main className="mt-4">
          <Container>
            <Switch>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  );
};

export default App;
