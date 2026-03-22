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
  faBriefcase,
  faLocationDot,
  faServer,
  faDatabase,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import { COLORS } from './utils/styles';

import './App.css';
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faMedium,
  faJava,
  faDocker,
  faAws,
} from '@fortawesome/free-brands-svg-icons';

const profilePic = 'https://avatars.githubusercontent.com/u/17517090?v=4';

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(0, 204, 102, 0.15); }
  50% { box-shadow: 0 0 25px rgba(0, 204, 102, 0.25); }
`;

const MainCard = styled.div`
  max-width: 780px;
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
  margin-bottom: 0.5rem;
`;

const RoleInfo = styled.p`
  color: ${COLORS.SECONDARY_DARK};
  font-size: 0.85rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const RoleItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

const Bio = styled.p`
  color: ${COLORS.SECONDARY};
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
  max-width: 560px;
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

const SkillCategory = styled.div`
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillCategoryLabel = styled.span`
  color: ${COLORS.SECONDARY_DARK};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 0.4rem;
`;

const SkillBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
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

const SKILL_CATEGORIES = [
  {
    label: 'Backend',
    skills: [
      { icon: faJava, label: 'Java' },
      { icon: faServer, label: 'Spring Boot' },
      { icon: faDatabase, label: 'PostgreSQL' },
      { icon: faServer, label: 'Kafka' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    skills: [
      { icon: faDocker, label: 'Docker' },
      { icon: faCloud, label: 'Kubernetes' },
      { icon: faCloud, label: 'Terraform' },
      { icon: faAws, label: 'AWS' },
      { icon: faGitlab, label: 'CI/CD' },
    ],
  },
  {
    label: 'Architecture & AI',
    skills: [
      { icon: faServer, label: 'Microservices' },
      { icon: faServer, label: 'OAuth 2.0 / Keycloak' },
      { icon: faRobot, label: 'MCP / AI Agents' },
    ],
  },
];


const SOCIALS = [
  { icon: faGitlab, href: 'https://gitlab.com/emresen', label: 'GitLab' },
  { icon: faGithub, href: 'https://github.com/maemresen', label: 'GitHub' },
  { icon: faMedium, href: 'https://medium.com/@maemresen', label: 'Medium' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/maemresen/', label: 'LinkedIn' },
  { icon: faEnvelope, href: 'mailto:maemresen@yazilim.vip', label: 'Email' },
];

const App = () => (
  <MainCard as="article" itemScope itemType="https://schema.org/Person">
    <Container fluid>
      <header>
        <Row className="justify-content-center text-center">
          <Col xs={12} className="d-flex flex-column align-items-center">
            <ProfileImage
              src={profilePic}
              roundedCircle
              alt="Mehmet Arif Emre Sen"
              itemProp="image"
            />
            <Name className="mt-3" itemProp="name">Mehmet Arif Emre Sen</Name>
            <Handle>@maemresen</Handle>
            <RoleInfo>
              <RoleItem>
                <FontAwesomeIcon icon={faBriefcase} />
                <span itemProp="worksFor">Kuehne+Nagel</span>
              </RoleItem>
              <RoleItem>
                <FontAwesomeIcon icon={faLocationDot} />
                <span itemProp="address">Tallinn, Estonia</span>
              </RoleItem>
            </RoleInfo>
            <nav aria-label="Social links" className="d-flex gap-3 mb-3">
              {SOCIALS.map((s) => (
                <SocialLink
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  itemProp="sameAs"
                >
                  <FontAwesomeIcon icon={s.icon} size="lg" />
                </SocialLink>
              ))}
            </nav>
            <Bio itemProp="description">
              Software engineer specializing in Java Spring Boot, microservices
              architecture, and cloud-native infrastructure. 8+ years of
              experience across fintech, logistics, and IoT domains.
              Creator of YazilimVIP open-source community.
            </Bio>
          </Col>
        </Row>
      </header>

      <Divider />

      <section aria-label="Tech Stack">
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <SectionTitle className="justify-content-center">
              <FontAwesomeIcon icon={faCode} />
              Tech Stack
            </SectionTitle>
            {SKILL_CATEGORIES.map((cat) => (
              <SkillCategory key={cat.label}>
                <SkillCategoryLabel>{cat.label}</SkillCategoryLabel>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {cat.skills.map((s) => (
                    <SkillBadge key={s.label} itemProp="knowsAbout">
                      <FontAwesomeIcon icon={s.icon} />
                      {s.label}
                    </SkillBadge>
                  ))}
                </div>
              </SkillCategory>
            ))}
          </Col>
        </Row>
      </section>

      <Divider />

      <section aria-label="Actions">
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <PrimaryButton
                href="/cv.pdf"
                download="Mehmet_Arif_Emre_Sen_CV.pdf"
                aria-label="Download CV"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </PrimaryButton>
              <ActionButton
                href="https://www.yazilim.vip"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit YazilimVIP Community"
              >
                <FontAwesomeIcon icon={faUsers} />
                YazilimVIP Community
              </ActionButton>
            </div>
          </Col>
        </Row>
      </section>

      <Divider />
      <footer>
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <Footer>
              <FontAwesomeIcon icon={faRobot} />
              {' Built with Claude Code'}
            </Footer>
          </Col>
        </Row>
      </footer>
    </Container>
  </MainCard>
);

export default App;
