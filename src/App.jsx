import React from 'react';

import { Container, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { InfoCard } from './components'
import { wallpaper, emrePortrait } from './assets';

function App() {
  return (
    <div id="app" className="vh-100" style={{
      background: `url(${wallpaper})`
    }}>
      <div id="overlay" className="vh-100" style={{
        backgroundColor: "rgba(30, 30, 30, 0.7)",
        overflow: "auto"
      }}>
        <Container fluid className="vh-100">
          <Row className="h-100 justify-content-center">
            <Col lg="6" className="align-self-center">
              <InfoCard
                header="Mehmet Arif Emre Şen"
              >
                {/* <Image
                  rounded
                  fluid
                  src={emrePortrait}
                  className="border border-dark"
                  style={{
                    maxWidth: "200px"
                  }} /> */}
                <div
                  style={{
                    textAlign: "justify"
                  }}>
                  I am an entrepreneur who wants to learn new technologies and use them to make things easier.
                  My life goal is having my own job and creating a software community that everyone can get benefit from.
                  I have deep interest to Object Oriented Paradigm
                  And, I am a Linux User.
                </div>

                <div className="border-top border-dark mt-4 pt-4">
                  To learn more details about me you may check following links
                  <hr />
                  <a
                    className='d-block text-center'
                    href='https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>Personal CV</b>
                  </a>
                  <hr />
                  <a
                    className='d-block text-center'
                    href='https://www.yazilim.vip/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>Yazilim VIP</b>
                  </a>
                  <hr />
                  <a
                    className='d-block text-center'
                    href='https://medium.com/@maemresen'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>Medium</b>
                  </a>
                  <hr />
                  <a
                    className='d-block text-center'
                    href='https://www.linkedin.com/in/maemresen/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>LinkedIn</b>
                  </a>
                </div>
              </InfoCard>
            </Col>
          </Row>
        </Container>

      </div>
    </div>

  );
}

export default App;
