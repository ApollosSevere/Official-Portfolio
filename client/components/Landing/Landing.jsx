import React from "react";

//CSS
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-left">
        <div className="landing-left-wrapper">
          <h2 className="l-intro">Hello, My name is</h2>
          <h1 className="l-name">Apollos Severe</h1>

          <div className="l-title">
            <div className="l-title-wrapper">
              <div className="l-title-item">Web Developer</div>
              <div className="l-title-item">Content Creator</div>
              <div className="l-title-item">UI/UX Designer</div>
              <div className="l-title-item">Backend Engineer</div>
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
        <img src="/assets/img/utils/me.png" alt="" className="l-img" />
      </div>
    </div>
  );
}

export default Landing;
