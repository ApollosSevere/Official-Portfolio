import React from "react";

import ProjectList from "./components/ProjectList/ProjectList.jsx";
import Landing from "./components/Landing/Landing.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <div>
      <Landing />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App;
