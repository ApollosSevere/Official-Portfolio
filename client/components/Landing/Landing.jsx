import React, { useContext } from "react";
import { ThemeContext } from "../../context";

//CSS
import "./landing.css";

function Landing() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="landing">
      <div className="landing-left">
        <div className="landing-left-wrapper">
          <h2 className="l-intro">Hello, My name is</h2>
          <h1 className="l-name">Apollos Severe</h1>

          <div className="l-title">
            <div className="l-title-wrapper">
              <div
                style={{ color: darkMode ? "#59b256" : "bisque" }}
                className="l-title-item"
              >
                Web Developer
              </div>
              <div
                style={{ color: darkMode ? "#59b256" : "bisque" }}
                className="l-title-item"
              >
                Content Creator
              </div>
              <div
                style={{ color: darkMode ? "#59b256" : "bisque" }}
                className="l-title-item"
              >
                UI/UX Designer
              </div>
              <div
                style={{ color: darkMode ? "#59b256" : "bisque" }}
                className="l-title-item"
              >
                Backend Engineer
              </div>
            </div>
          </div>

          <p className="l-desc">
            I specialize in software engineering, database management, complex
            algorithms, and back-end development. I have a passion for fluently
            integrating technology and business
          </p>
        </div>
      </div>

      <div className="landing-right">
        <div
          style={{ backgroundColor: darkMode ? "#333" : "bisque" }}
          className="l-bg"
        ></div>
        <img src="/assets/img/utils/me.png" alt="" className="l-img" />
      </div>
    </div>
  );
}

export default Landing;
