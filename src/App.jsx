import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEnvelope,
  faCode,
  faUsers,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { COLORS } from './utils/styles';

import profilePic from './assets/images/profile_pic.jpg';
import './App.css';
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faMedium,
  faJava,
  faJs,
  faReact,
  faDocker,
  faAws,
  faGitAlt,
  faPython,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(0, 204, 102, 0.15); }
  50% { box-shadow: 0 0 25px rgba(0, 204, 102, 0.25); }
`;

const MainCard = styled.div`
  max-width: 720px;
  width: 100%;
  border: 1px solid ${COLORS.BORDER};
  border-radius: 16px;
  background: ${COLORS.BG_CARD};
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  animation: ${glowPulse} 4s ease-in-out infinite;
`;

const ProfileImage = styled(Image)`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 2px solid ${COLORS.PRIMARY_DIM};
`;

const Name = styled.h1`
  color: ${COLORS.PRIMARY};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const Handle = styled.p`
  color: ${COLORS.SECONDARY_DARK};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  color: ${COLORS.SECONDARY};
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
`;

const SocialLink = styled.a`
  color: ${COLORS.SECONDARY_DARK};
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: ${COLORS.PRIMARY};
    transform: translateY(-2px);
  }
`;

const Divider = styled.hr`
  border-color: ${COLORS.BORDER};
  margin: 1.5rem 0;
`;

const SectionTitle = styled.h5`
  color: ${COLORS.PRIMARY};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: ${COLORS.SECONDARY};
  background: ${COLORS.BG_BADGE};
  border: 1px solid ${COLORS.BORDER};
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid ${COLORS.BORDER};
  color: ${COLORS.SECONDARY};
  background: transparent;

  &:hover {
    background: ${COLORS.BG_BADGE};
    color: ${COLORS.PRIMARY};
    border-color: ${COLORS.PRIMARY_DIM};
  }
`;

const PrimaryButton = styled(ActionButton)`
  background: ${COLORS.PRIMARY_DIM};
  border-color: ${COLORS.PRIMARY_DIM};
  color: #fff;

  &:hover {
    background: ${COLORS.PRIMARY};
    border-color: ${COLORS.PRIMARY};
    color: #fff;
  }
`;

const Footer = styled.p`
  color: ${COLORS.SECONDARY_DARK};
  font-size: 0.75rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const SKILLS = [
  { icon: faJava, label: 'Java' },
  { icon: faJs, label: 'JavaScript' },
  { icon: faReact, label: 'React' },
  { icon: faPython, label: 'Python' },
  { icon: faDocker, label: 'Docker' },
  { icon: faAws, label: 'AWS' },
  { icon: faGitAlt, label: 'Git' },
  { icon: faLinux, label: 'Linux' },
];

const SOCIALS = [
  { icon: faGitlab, href: 'https://gitlab.com/emresen' },
  { icon: faGithub, href: 'https://github.com/maemresen' },
  { icon: faMedium, href: 'https://medium.com/@maemresen' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/maemresen/' },
  { icon: faEnvelope, href: 'mailto:maemresen@yazilim.vip' },
];

const App = () => (
  <MainCard>
    <Container fluid>
      {/* Header */}
      <Row className="justify-content-center text-center">
        <Col xs={12} className="d-flex flex-column align-items-center">
          <ProfileImage src={profilePic} roundedCircle />
          <Name className="mt-3">Mehmet Arif Emre Sen</Name>
          <Handle>@maemresen</Handle>
          <div className="d-flex gap-3 mb-3">
            {SOCIALS.map((s) => (
              <SocialLink key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={s.icon} size="lg" />
              </SocialLink>
            ))}
          </div>
          <Bio>
            Software engineer focused on building clean, scalable systems.
            Passionate about open source and knowledge sharing through
            the YazilimVIP community.
          </Bio>
        </Col>
      </Row>

      <Divider />

      {/* Skills */}
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <SectionTitle className="justify-content-center">
            <FontAwesomeIcon icon={faCode} />
            Tech Stack
          </SectionTitle>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {SKILLS.map((s) => (
              <SkillBadge key={s.label}>
                <FontAwesomeIcon icon={s.icon} />
                {s.label}
              </SkillBadge>
            ))}
          </div>
        </Col>
      </Row>

      <Divider />

      {/* Actions */}
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <PrimaryButton
              href="https://drive.google.com/file/d/1YW1Tekf5oTMoqJIt1J-eKq8mGEkMV811/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </PrimaryButton>
            <ActionButton
              href="https://www.yazilim.vip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faUsers} />
              YazilimVIP Community
            </ActionButton>
          </div>
        </Col>
      </Row>
      {/* Footer */}
      <Divider />
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <Footer>
            <FontAwesomeIcon icon={faRobot} />
            {' Built with Claude Code'}
          </Footer>
        </Col>
      </Row>
    </Container>
  </MainCard>
);

export default App;
