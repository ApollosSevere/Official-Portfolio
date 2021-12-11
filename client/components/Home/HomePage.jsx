import React from "react";
import "./home.css";
import Topbar from "../Topbar/Topbar.jsx";
import HomeBody from "./HomeBody/HomeBody.jsx";

function HomePage() {
  return (
    <div>
      <Topbar />
      <HomeBody />
    </div>
  );
}

export default HomePage;
