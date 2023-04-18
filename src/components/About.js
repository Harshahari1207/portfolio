import fb from "../img/icons8-facebook.svg";
import linkedin from "../img/icons8-linkedin.svg";
import github from "../img/icons8-github.svg";
import dog from "../img/dog.gif";
export const About = () => {
  return (
    <div className="about">
      <div className="contact">
        <div className="contactImg">
          <a href="https://github.com/Harshahari1207">
            <img src={github} alt="" />
          </a>
        </div>
        <div className="contactImg">
          <a href="https://www.linkedin.com/in/bali-harsha-kumar-reddy-4b21031b5/">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className="contactImg">
          <a href="https://www.facebook.com/harsha.hari.92775">
            <img src={fb} alt="" />
          </a>
        </div>
      </div>
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
