import React from "react";
import { Link } from "react-router-dom";

import "./projectCard.css";

function ProjectCard() {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <Link to="/">
        <img src="/assets/img/utils/cert.jpeg" alt="" className="p-img" />
      </Link>
    </div>
  );
}

export default ProjectCard;
