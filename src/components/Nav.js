// import { About } from "./About";
// import { Projects } from "./Projects";
// import Skills from "./Skills";
// import Footer from "./Footer";

import { useState } from "react";
import dark from "../img/dark.png";
import light from "../img/light.png";

export const Nav = () => {
  let [darks, setDarkmode] = useState(dark);
  let [lightmode, setLightmode] = useState(true);
  const body = document.querySelector(".body");
  const changeLogo = () => {
    console.log("dark");
    if (lightmode) {
      setDarkmode(dark);
      setLightmode(false);
      body.classList.remove("darkmode");
      body.classList.add("lightmode");
      
      console.log(darks);
      console.log(lightmode);
    } else {
      console.log(darks);
      console.log(lightmode);
      setLightmode(true);
      setDarkmode(light);
      body.classList.add("darkmode");
      body.classList.remove("lightmode");
      
    }
  };
  return (
    <div className="navBar">
      <div className="darkLogo" onClick={() => changeLogo()}>
        <img src={darks} alt="" />
      </div>
      <div className="navLinks">
        <ul>
          <li className="navAbout">
            <a href="#about">About</a>
          </li>
          <li className="navProjects">
            <a href="#projects">Projects</a>
          </li>
          <li className="navSkills">
            <a href="#skills">Skills</a>
          </li>
          <li className="navContact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
