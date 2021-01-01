import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import { wallpaper } from "./assets";
import { InfoLink, InfoLinkType } from "./component/infoLink/InfoLink";

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

const INFO_LINK_LIST: Array<InfoLinkType> = [
  {
    url:
      "https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf",
    title: "Personal CV",
  },
  { url: "https://www.yazilim.vip/", title: "Yazilim VIP" },
  { url: "https://medium.com/@maemresen", title: "Medium" },
  {
    url: "https://www.linkedin.com/in/maemresen/",
    title: "LinkedIn",
  },
];

const App = () => {
  return (
    <div id="app" className="vh-100" style={styles.body}>
      <div id="overlay" className="vh-100" style={styles.bodyOverlay}>
        <Container fluid className="vh-100">
          <Row className="h-100 justify-content-center">
            <Col lg="6" className="align-self-center text-center">
              <Jumbotron style={styles.jumbotron}>
                <h1>Mehmet Arif Emre Şen</h1>
                <h4>(a.k.a maemresen)</h4>
                <Image
                  roundedCircle
                  fluid
                  src="https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4"
                  className="border border-dark"
                  style={{
                    maxWidth: "200px",
                  }}
                />
                <h5 className="mt-4 text-secondary text-center">
                  I am an entrepreneur who wants to learn new technologies and
                  use them to make things easier. My life goal is having my own
                  job and creating a software community that everyone can get
                  benefit from. I have deep interest to Object Oriented Paradigm
                  And, I am a Linux User.
                </h5>
                <h3 className="mt-4">
                  Check Links Below for more <br />V V V
                </h3>
                <h5 className="mt-4">
                  {INFO_LINK_LIST.map((each) => (
                    <InfoLink title={each.title} url={each.url}></InfoLink>
                  ))}
                </h5>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
