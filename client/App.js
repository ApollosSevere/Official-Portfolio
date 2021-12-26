import React, { useContext } from "react";

import { ThemeContext } from "./context.js";
import Routes from "./Routes.js";
import Navbar from "./components/Navbar/Navbar";

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
      <Routes />
    </div>
  );
};

export default App;
