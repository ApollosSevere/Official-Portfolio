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
        </div>
      </div>
      <div className="landing-right">right</div>
    </div>
  );
}

export default Landing;
