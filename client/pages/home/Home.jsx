import React, { useContext } from "react";

import { ThemeContext } from "../../context.js";
import Toggle from "../../components/toggle/Toggle.jsx";
import About from "../../components/About/About.jsx";
import Landing from "../../components/Landing/Landing.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import ProjectList from "../../components/ProjectList/ProjectList.jsx";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Landing />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default Home;
