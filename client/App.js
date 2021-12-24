import React, { useContext } from "react";

import ProjectList from "./components/ProjectList/ProjectList.jsx";
import Landing from "./components/Landing/Landing.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context.js";

const App = () => {
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

export default App;
