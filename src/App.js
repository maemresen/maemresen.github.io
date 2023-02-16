import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChampagneGlasses,
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { COLORS } from './utils/styles';

import profilePic from './assets/images/profile_pic.jpg';
import './App.css';
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

const TitleContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${COLORS.PRIMARY};
`;

const SubTitle = styled.h3`
  color: ${COLORS.SECONDARY};
`;

const References = styled.div`
  color: ${COLORS.SECONDARY};
  
  display: flex;
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

const ReferenceLink = styled(MaeLink)`
  &:hover{
    color: ${COLORS.PRIMARY} !important;
  }
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
              <References>
                <ReferenceLink
                  target="_blank"
                  href="https://gitlab.com/emresen"
                >
                  <FontAwesomeIcon icon={faGitlab} className="mx-3 mt-2" size="2x" />
                </ReferenceLink>
                <ReferenceLink
                  target="_blank"
                  href="https://github.com/maemresen"
                >
                  <FontAwesomeIcon icon={faGithub} className="mx-3 mt-2" size="2x" />
                </ReferenceLink>
                <ReferenceLink
                  target="_blank"
                  href="https://medium.com/@maemresen"
                >
                  <FontAwesomeIcon icon={faMedium} className="mx-3 mt-2" size="2x" />
                </ReferenceLink>
                <ReferenceLink
                  target="_blank"
                  href="https://www.linkedin.com/in/maemresen/"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mx-3 mt-2" size="2x" />
                </ReferenceLink>
                <ReferenceLink
                  target="_blank"
                  href="mailto:maemresen@yazilim.vip"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mx-3 mt-2" size="2x" />
                </ReferenceLink>
              </References>
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
                <span className="mx-3">
                      <MaeLink
                        target="_blank"
                        href="https://docs.google.com/document/d/1T42aU_cMhW1rbW-2Ff2a3OZSM7XHXyiCWWP9q452IQE/export?format=pdf"
                      >
                        Check My Cv here
                      </MaeLink>
                </span>
                <FontAwesomeIcon icon={faFile} />
              </h5>
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
