import { SideContact } from "./SideContact";
import dog from "../img/dog.gif";
export const About = () => {
  return (
    
    <div id="about" className="about">
      <SideContact />
      <div className="aboutContent">
        <div className="aboutFirst">
          <h2>I There 👋</h2>
          <h2>I'm Harsha</h2>
        </div>
        <div className="aboutSecond">
          <h3>WEB DEVELOPER</h3>
          <h3>B.TECH - ELECTRONICS AND COMMUNICATION ENGINEERING</h3>
        </div>
        <div className="aboutThird">
          <h3>Click on the doggy. He will take you to my Resume</h3>
        </div>
      </div>
      <div className="resumeGif">
        <a href="https://drive.google.com/file/d/1Y1JJb4omaZty2w_iWBXnF1QHz0yiIuug/view?usp=sharing">
          <img id="resume-gif" src={dog} alt="" />
        </a>
      </div>
    </div>
  );
};
