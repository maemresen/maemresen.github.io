import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { COLORS } from './utils/styles';

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

const App = () => (
  <Container>
    <Row>
      <Col md={2}>
        <Image
          width="130"
          rounded
          src="https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4"
        />
      </Col>
      <Col md={8}>
        <TitleContainer>
          <Title>Mehmet Arif Emre Şen</Title>
          <SubTitle>(a.k.a maemresen)</SubTitle>
        </TitleContainer>
      </Col>
      <Col md={2}>
        <Image
          width="130"
          rounded
          src="https://maemresen.com/static/media/profile_pic.eb8d4952.jpg"
        />
      </Col>
    </Row>
    <Row>
      <Col md={{
        span: 8,
        offset: 2,
      }}
      >
        <Section className="mb-4">
          I am an entrepreneur who wants to learn ne w technologies and use
          them
          to
          make things easier. My life goal is having my own job and creating a
          software community that everyone can get benefit from. I have deep
          interest to Object Oriented Paradigm.
        </Section>
        <Section className="mb-4" primary>
          <div>
            Check My Cv here
          </div>
          <div>
            English...Türkçe...
          </div>
        </Section>
        <Section className="mb-4">
          We have a software community named as YazilimVIP. Feel free to visit
          our website by the following link
        </Section>
      </Col>
    </Row>
  </Container>
);

export default App;
