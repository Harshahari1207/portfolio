// import { About } from "./About";
// import { Projects } from "./Projects";
// import Skills from "./Skills";
// import Footer from "./Footer";

import { useState } from "react";
import dark from "../img/dark.png";
import light from "../img/light.png";
import { NavLinks } from "./NavLinks";

import logo from "../img/three-line-menu-icon.png";

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
  const changeNav = () => {
    const navAfter = document.querySelector(".navAfter");
    const navLinksAfter = document.querySelector(".navLinksAfter");
    console.log("clicked");
    navLinksAfter.style.display = "none";
    navAfter.style.display = "flex";
  };

  return (
    <div className="navBar">
      <div className="darkLogo" onClick={() => changeLogo()}>
        <img src={darks} alt="" />
      </div>
      <div className="mainNavLinks">
        <NavLinks />
      </div>
      <div className="navLinksAfter">
        <div className="afterLogo" onClick={() => changeNav()}>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};
