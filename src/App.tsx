import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faGitlab,
  faLinkedin,
  faLinux,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faFile,
  faGlassCheers,
  fas,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";
import profilePic from "./assets/img/profile_pic.jpg";

// Fontaweome
library.add(fab);
library.add(fas);
library.add(far);

const data = {
  title: "Mehmet Arif Emre Şen",
  subtitle: "(a.k.a maemresen)",
  aboutMe: `
    I am an entrepreneur who wants to learn new technologies and
    use them to make things easier. My life goal is having my own
    job and creating a software community that everyone can get
    benefit from. I have deep interest to Object Oriented
    Paradigm.
  `,
  imageLeftSrc:
    "https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4",
  imageRightSrc: profilePic,
  cardSectionClass: "mt-4",
  linkList: [
    { url: "https://gitlab.com/emresen", icon: faGitlab },
    { url: "https://github.com/maemresen", icon: faGithub },
    { url: "https://medium.com/@maemresen", icon: faMedium },
    {
      url: "https://www.linkedin.com/in/maemresen/",
      icon: faLinkedin,
    },
    {
      url: "mailto:maemresen@yazilim.vip",
      icon: faEnvelope,
    },
  ],
};

const Maecard = () => {
  return (
    <div className="mae-card jumbotron text-secondary">
      <div className="row">
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
          <img
            src={data.imageLeftSrc}
            alt="not found"
            className="rounded d-none d-lg-block"
            width="130"
            height="130"
          />
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div>
            <h1 className="mae-text-green">{data.title}</h1>
            <h3 className="text-secondary">{data.subtitle}</h3>
            <div className="mt-4">
              {data.linkList.map((link) => (
                <div className="d-inline-block icon-link">
                  <a
                    className="text-secondary"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="mr-4"
                      size="2x"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
          <img
            src={data.imageRightSrc}
            alt="not found"
            className="rounded d-none d-lg-block"
            width="130"
            height="130"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h5
              style={{
                textAlign: "justify",
              }}
            >
              {data.aboutMe}
            </h5>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h5>
          <a
            href="https://cv.yazilim.vip/mehmet-arif-emre-sen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary mae-link"
          >
            <FontAwesomeIcon icon={faFile} />
            <span className="mx-3">Check My Cv here...</span>
            <FontAwesomeIcon icon={faFile} />
          </a>
        </h5>
      </div>
      <div className="mt-4">
        <h5>
          We have a software community named as YazilimVIP.
          <br />
          Feel free to visit our website by the following link
        </h5>
        <h5>
          <a
            className="text-secondary mae-link"
            href="https://www.yazilim.vip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlassCheers} />
            <span className="mx-3">www.yazilim.vip</span>
            <FontAwesomeIcon icon={faGlassCheers} />
          </a>
        </h5>
      </div>
      <div className="mt-4">
        <h5>
          <div>Also, I am a Linux User.</div>
          <div className="my-4">
            <FontAwesomeIcon icon={faLinux} size="4x" />
          </div>
          <div>
            <a
              className="text-secondary mae-link"
              href="https://manjaro.org/downloads/official/xfce/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              <span className="mx-3">Preffered Distro: Manjaro XFCE</span>
              <FontAwesomeIcon icon={faThumbsUp} />
            </a>
          </div>
        </h5>
      </div>
    </div>
  );
};

const App = () => (
  <div id="overlay" className="h-100">
    <div className="container h-100 d-flex align-items-center justify-content-center">
      <Maecard />
    </div>
  </div>
);

export default App;
