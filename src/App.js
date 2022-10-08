import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { COLORS } from './utils/styles';

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Title = styled.span`
  color: ${COLORS.PRIMARY}
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
  </Container>
);

export default App;
