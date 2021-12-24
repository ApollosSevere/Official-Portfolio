import React, { useRef, useState, useContext } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formRef.current);

    emailjs
      .sendForm(
        "service_owsdcbd",
        "template_7h6o4vl",
        formRef.current,
        "user_zkQkPAhiYHswcGCxAFZbM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="from_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              required
            />
            {done && "Thank you..."}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
