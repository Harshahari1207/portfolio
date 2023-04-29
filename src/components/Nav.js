// import { About } from "./About";
// import { Projects } from "./Projects";
// import Skills from "./Skills";
// import Footer from "./Footer";

import { useState } from "react";
import dark from "../img/dark.png";
import light from "../img/light.png";
import { NavLinks } from "./NavLinks";

import three from "../img/three-line-menu-icon.png";

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
  const openNavLinks = () => {
    console.log("open nva links")
    return(
      <div className="openNavLinks">
        <h1>Open</h1>
      </div>
    )
  };
  return (
    <div className="navBar">
      <div className="darkLogo" onClick={() => changeLogo()}>
        <img src={darks} alt="" />
      </div>
      <div className="mainNavLinks">
        <NavLinks />
      </div>
    </div>
  );
};
