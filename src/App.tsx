import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faInbox, fas } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faGithub,
  faGitlab,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { wallpaper } from "./assets";
import { IconLink, InfoLinkType } from "./component/infoLink/InfoLink";

library.add(fab);
library.add(fas);
library.add(far);

const styles = {
  body: {
    // Main Div element
    background: `url(${wallpaper})`,
  },
  bodyOverlay: {
    // Overlay to add transparanecy effect to bg image
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    overflow: "auto",
  },
  jumbotron: {
    backgroundColor: "rgba(10, 10, 10, 0.8)",
    color: "green",
  },
};

const App = () => {
  return (
    <div id="app" className="vh-100" style={styles.body}>
      <div id="overlay" className="vh-100" style={styles.bodyOverlay}>
        <Container fluid className="vh-100">
          <Row className="h-100 justify-content-center">
            <Col lg="6" className="align-self-center text-center">
              <Jumbotron style={styles.jumbotron}>
                <h1>Mehmet Arif Emre Şen</h1>
                <h4 className="text-secondary">(a.k.a maemresen)</h4>
                <div className="border-top border-success mt-4 pt-4">
                  <div className="text-secondary mt-2">
                    <IconLink
                      iconCode={"gitlab"}
                      link="https://gitlab.com/emresen"
                    />
                    <IconLink
                      iconCode={"github"}
                      link="https://github.com/maemresen"
                    />
                    <IconLink
                      iconCode={"medium"}
                      link="https://medium.com/@maemresen"
                    />
                    <IconLink
                      iconCode={"linkedin"}
                      link="https://www.linkedin.com/in/maemresen/"
                    />
                    <div className={`d-inline-block icon-link`}>
                      <a
                        href="mailto:maemresen@yazilim.vip"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="mr-3"
                          size="2x"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-top border-success mt-4 pt-2">
                  <Image
                    roundedCircle
                    fluid
                    src="https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4"
                    className="border border-dark mt-4"
                    style={{
                      maxWidth: "200px",
                    }}
                  />
                  <h3 className="mt-4">About Me</h3>
                  <h5 className="mt-2 text-secondary text-center">
                    I am an entrepreneur who wants to learn new technologies and
                    use them to make things easier. My life goal is having my
                    own job and creating a software community that everyone can
                    get benefit from. I have deep interest to Object Oriented
                    Paradigm And, I am a Linux User.
                  </h5>
                </div>
                <div className="text-secondary border-top border-success mt-4 pt-4 icon-link">
                  <a
                    href="https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5>Check My CV Here...</h5>
                  </a>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
