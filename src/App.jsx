import React from 'react';

import { Container, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { TopMenu, InfoCard } from './components'
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
        <header>
          <TopMenu />
        </header>
        <main className="py-4">
          <Container fluid>
            <Row>
              <Col lg={{
                span: 4,
                offset: 4
              }}>
                <InfoCard
                  header="About Me"
                  footer={(
                    <>
                      <a
                        className='d-block text-center'
                        href='https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <b>CV Link</b>
                      </a>
                    </>
                  )}
                >
                  <Row>
                    <Col lg="12" className="align-self-center">
                      <Image src={emrePortrait} rounded fluid className="border border-dark" style={{
                        maxWidth: "200px"
                      }} />
                      <div className="border-top border-dark mt-4 pt-4">
                        I am an entrepreneur who wants to learn new technologies and use them to make things easier.
                        My life goal is having my own job and creating a software community that everyone can get benefit from.
                        I have deep interest to Object Oriented Paradigm
                      </div>
                    </Col>
                  </Row>

                </InfoCard>
              </Col>

              <Col lg={{
                span: 6
              }}>
                <InfoCard
                  header="Hobby Projects"
                >
                  I am an entrepreneur who wants to learn new technologies and use them to make things easier.
                  <br />
                  My life goal is having my own job and creating a software community that everyone can get benefit from.
                  <br />
                  I have deep interest to Object Oriented Paradigm
                  <hr />
                  <a
                    className='d-block text-center'
                    href='https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>CV Link</b>
                  </a>
                </InfoCard>
              </Col>
              <Col lg={{
                span: 6
              }}>
                <InfoCard
                  header="Contact Me"
                >
                  I am an entrepreneur who wants to learn new technologies and use them to make things easier.
                  <br />
                  My life goal is having my own job and creating a software community that everyone can get benefit from.
                  <br />
                  I have deep interest to Object Oriented Paradigm
                  <hr />
                  <a
                    className='d-block text-center'
                    href='https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>CV Link</b>
                  </a>
                </InfoCard>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </div>

  );
}

export default App;
