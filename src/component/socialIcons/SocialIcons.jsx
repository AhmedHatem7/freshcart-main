import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const SocialIcons = ({ sizeng,area }) => {
  const iconStyle = {
    fontSize: `${sizeng}rem`,
    margin: "0 6px ",
    transition: "0.3s",
  };

  const linkedinColor = "#0077b5";
  const githubColor = "#333";
  const facebookColor = "#1877f2";
  const instagramColor = "#bc2a8d";

  return (
    <div className={area}>
      <a
        href="https://www.linkedin.com/in/nourseen-qandil-804369245/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin style={{ ...iconStyle, color: linkedinColor }} />
      </a>
      <a
        href="https://github.com/NoorseenQandil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub style={{ ...iconStyle, color: githubColor }} />
      </a>
      <a
        href="https://www.facebook.com/nourseen7788mohsen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook style={{ ...iconStyle, color: facebookColor }} />
      </a>
      <a
        href="https://www.instagram.com/noorseen_qandil/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram style={{ ...iconStyle, color: instagramColor }} />
      </a>
    </div>
  );
};

export default SocialIcons;
