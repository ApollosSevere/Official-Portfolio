import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillYoutube, AiOutlineLink } from "react-icons/ai";

import "./projectCard.css";

function ProjectCard() {
  return (
    <div className="p">
      <div className="p-wrapper">
        <div className="p-left">
          <img src="/assets/img/utils/cert.jpeg" alt="" className="p-img" />
        </div>

        <div className="p-right">
          <div className="p-title">
            MOBILE AND DESKTOP APP FOR LONDON HOSTEL STORE
          </div>

          <div className="p-desc">
            Do answered bachelor occasion in of offended no concerns. Supply
            worthy warmth branch of no ye. Voice tried known to as my to. Though
            wished merits or be. Alone visit use these smart rooms ham.
          </div>

          <div className="p-stack">USED STACK:</div>

          <ul className="p-tags">
            <li>html5</li>
            <li>css3</li>
            <li>JavaScript</li>
            <li>bower</li>
            <li>grunt</li>
          </ul>

          <div className="socials">
            <ul className="p-social">
              <li>
                <AiOutlineLink size="1.5rem" />
              </li>
              <li>
                <AiFillGithub size="1.5rem" />
              </li>
              <li>
                <AiFillYoutube size="1.5rem" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
