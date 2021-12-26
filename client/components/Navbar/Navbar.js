import "./navbar.css";
import React from "react";

import { Link } from "react-router-dom";

const Navbar = ({ handleClick, isLoggedIn, username }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/addpost">
              PORTFOLIO
            </Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <p>{username}</p>
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                alt=""
              />
            </Link>
          </div>
        </>

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  </div>
);

export default Navbar;
