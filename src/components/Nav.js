// import { About } from "./About";
// import { Projects } from "./Projects";
// import Skills from "./Skills";
// import Footer from "./Footer";
import dark from "../img/moon-icon.svg";


export const Nav = () => {
  return (
    <div className="navBar">
      <div className="darkLogo">
        <img src={dark} alt="" />
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
