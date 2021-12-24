import "./toggle.css";
import React from "react";
import { useContext } from "react";

import { ThemeContext } from "../../context.js";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src="/assets/img/utils/sun.png" alt="" className="t-icon" />
      <img src="/assets/img/utils/moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
