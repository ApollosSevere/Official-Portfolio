import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="c">
      <div className="c-bg"></div>

      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-icon-item">
              <img
                src="/assets/img/utils/phone.png"
                alt=""
                className="c-icon"
              />
              +1 (267) 746 - 9137
            </div>
            <div className="c-icon-item">
              <img
                src="/assets/img/utils/email.png"
                alt=""
                className="c-icon"
              />
              severeapollos@gmail.com
            </div>
            <div className="c-icon-item">
              <img
                src="/assets/img/utils/address.png"
                alt=""
                className="c-icon"
              />
              Philadelphia, Pennsylvania
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
