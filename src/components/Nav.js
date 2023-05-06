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
  let [click, setClick] = useState(true);
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
    if(click){
      console.log("clicked");
      setClick(false);
      navAfter.style.display = "flex";
    }else{
      setClick(true);
      navAfter.style.display = "none";
      console.log("clicked in else");
    }
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
