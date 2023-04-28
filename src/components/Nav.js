// import { About } from "./About";
// import { Projects } from "./Projects";
// import Skills from "./Skills";
// import Footer from "./Footer";

import { useState } from "react";
import dark from "../img/dark.png";
import light from "../img/light.png";
import {Link} from 'react-scroll'

export const Nav = () => {
  let [darks, setDarkmode] = useState(dark);
  let [lightmode, setLightmode] = useState(true);
  const body = document.querySelector(".body");
  const changeLogo = () => {
    console.log("dark");
    if (lightmode) {
      setDarkmode(light);
      setLightmode(false);
      body.classList.add("darkmode");
      body.classList.remove("lightmode");
      
      console.log(darks);
      console.log(lightmode);
    } else {
      console.log(darks);
      console.log(lightmode);
      setLightmode(true);
      setDarkmode(dark);
      body.classList.remove("darkmode");
      body.classList.add("lightmode");
      
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
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          </li>
          <li className="navProjects">
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500}>Projects</Link>
          </li>
          <li className="navSkills">
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
          </li>
          <li className="navContact">
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
