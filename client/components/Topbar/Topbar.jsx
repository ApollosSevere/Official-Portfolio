import React from "react";
import { Link } from "react-router-dom";

import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="container topBarBox">
        <div className="topbar__logo">
          <p className="topbar__logoName">Future.</p>
        </div>

        <div className="topbar__links">
          <ul className="topbar__navLinks">
            <li className="topbar__link">
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>

            <li className="topbar__link">
              <Link style={{ color: "white" }} to="/about">
                About
              </Link>
            </li>

            <li className="topbar__link">
              <Link style={{ color: "white" }} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="topbar__social">
          <ul class="nav-social">
            <li class="list-inline-item">
              <a href="#">
                <i class="ti-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="ti-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="ti-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
