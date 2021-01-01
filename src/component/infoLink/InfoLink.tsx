import React from "react";

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
