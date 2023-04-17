import fb from "../img/icons8-facebook.svg";
import linkedin from "../img/icons8-linkedin.svg";
import github from "../img/icons8-github.svg";
export const About = () => {
  return (
    <div className="about">
      <div className="aboutContact">
        <img src={github} alt="" />
        <img src={linkedin} alt="" />
        <img src={fb} alt="" />
      </div>
      <div className="aboutContent">
        <h1>I'm Harsha</h1>
        <p>I am passionate about Web designing. </p>
      </div>
    </div>
  );
};
