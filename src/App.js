import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses, faFile } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from './utils/styles';

import profilePic from './assets/images/profile_pic.jpg';
import './App.css';

const TitleContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${COLORS.PRIMARY}
`;

const SubTitle = styled.h3`
  color: ${COLORS.SECONDARY}
`;

const Section = styled.div`
  color: ${({ primary }) => (primary ? COLORS.PRIMARY : COLORS.SECONDARY)};
  text-align: justify;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MaeLink = styled.a`
  color: ${COLORS.SECONDARY};

  &:hover {
    cursor: pointer;
    color: ${COLORS.SECONDARY_DARK} !important;
  }
`;

const CvContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const MainContainer = styled.div`
  border: 3px solid ${COLORS.PRIMARY};
  background-color: rgba(0,0,0,.3)
`;

const App = () => (
  <Col xs={{ span: 12 }} md={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
    <MainContainer className="p-4">
      <Container>
        <Row>
          <Col md={2} xxl={3}>
            <ImageContainer>
              <Image
                className="d-none d-lg-block"
                width="130"
                rounded
                src="https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4"
              />
            </ImageContainer>
          </Col>
          <Col md={8} xxl={6}>
            <TitleContainer>
              <Title>Mehmet Arif Emre Şen</Title>
              <SubTitle>(a.k.a maemresen)</SubTitle>
            </TitleContainer>
          </Col>
          <Col md={2} xxl={3}>
            <ImageContainer>
              <Image
                className="d-none d-lg-block"
                width="130"
                rounded
                src={profilePic}
              />
            </ImageContainer>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }} xxl={{ span: 6, offset: 3 }}>
            <Section className="mt-4">
              I am an entrepreneur who wants to learn ne w technologies and use
              them
              to
              make things easier. My life goal is having my own job and creating a
              software community that everyone can get benefit from. I have deep
              interest to Object Oriented Paradigm.
            </Section>
            <Section className="mt-4" primary>
              <h5>
                <FontAwesomeIcon icon={faFile} />
                <span className="mx-3">Check My Cv here</span>
                <FontAwesomeIcon icon={faFile} />
              </h5>
              <CvContainer>
                <h5 className="d-inline">
                  <MaeLink
                    target="_blank"
                    href="https://cv.yazilim.vip/mehmet-arif-emre-sen.pdf"
                  >
                    English...
                  </MaeLink>
                </h5>
                <h5 className="d-inline">
                  <MaeLink
                    target="_blank"
                    href="https://cv.yazilim.vip/mehmet-arif-emre-sen-tr.pdf"
                  >
                    Türkçe...
                  </MaeLink>
                </h5>
              </CvContainer>
            </Section>
            <Section className="mt-4">
              We have a software community named as YazilimVIP. Feel free to visit
              our website by the following link
            </Section>
            <Section className="mt-4">
              <CvContainer>
                <h5>
                  <FontAwesomeIcon icon={faChampagneGlasses} />
                  <MaeLink
                    className="mx-3"
                    target="_blank"
                    href="https://www.yazilim.vip"
                  >
                    www.yazilim.vip
                  </MaeLink>
                  <FontAwesomeIcon icon={faChampagneGlasses} />
                </h5>
              </CvContainer>
            </Section>
          </Col>
        </Row>
      </Container>
    </MainContainer>
  </Col>
);

export default App;
