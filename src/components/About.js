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
        <a href="https://drive.google.com/file/d/14n5ggTmDwKXutyAlco1uKhEwQ_vRSlT0/view?usp=share_link">
          <img src={dog} alt="" />
        </a>
      </div>
    </div>
  );
};
