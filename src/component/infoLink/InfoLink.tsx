import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./InfoLink.css";

export type InfoLinkType = { title: string; url: string };
export const InfoLink = ({ title, url }: InfoLinkType) => (
  <a
    className="info-link d-block p-3 text-secondary"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <b>{title}</b>
  </a>
);

export type IconLinkType = {
  iconCode: any;
  link: string;
};
export const IconLink = (props: IconLinkType) => (
  <div className={`d-inline-block icon-link ${props.iconCode}`}>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={["fab", props.iconCode]} className="mr-4"  size="2x" />
    </a>
  </div>
);
