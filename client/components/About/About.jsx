import React, { useContext } from "react";
import "./about.css";
import { ThemeContext } from "../../context";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about">
      <div
        style={{ backgroundColor: darkMode ? "#333" : "" }}
        className="about-left"
      >
        <div className="about-left-wrapper">
          <div
            style={{ backgroundColor: darkMode ? "#555" : "" }}
            className="about-card"
          >
            <div className="about-card-wrapper">
              <img
                className="about-img"
                src="/assets/img/utils/stand.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          About Me It is a long established fact that a reader will be
          distracted by the readable content.
        </p>
        <div className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </div>

        <div className="a-award">
          <div className="a-award-imgContainer">
            <img
              className="a-award-img"
              src="/assets/img/utils/cert.jpeg"
              alt=""
            />
          </div>

          <div className="a-award-texts">
            <h4 className="a-award-title">Web Development Certification</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
