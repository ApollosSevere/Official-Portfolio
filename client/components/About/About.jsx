import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        {/* <div className="about-card-bg"></div> */}
        <div className="about-card">
          <div className="about-card-wrapper">
            <img
              className="about-img"
              src="/assets/img/utils/stand.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="about-right"></div>
    </div>
  );
}

export default About;
