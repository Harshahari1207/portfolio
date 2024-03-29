import { SideContact } from "./SideContact";
import uniqid from "uniqid";
import React from "react";
import Fade from "react-reveal/Fade";
const Skills = () => {
  const skillCards = [
    {
      id: uniqid(),
      name: "C++",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710",
    },
    {
      id: uniqid(),
      name: "JAVA",
      img: "https://upload.wikimedia.org/wikipedia/de/thumb/e/e1/Java-Logo.svg/364px-Java-Logo.svg.png?20061221200047",
    },
    {
      id: uniqid(),
      name: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      id: uniqid(),

      name: "HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/768px-HTML5_Badge.svg.png?20110131171049",
    },
    {
      id: uniqid(),
      name: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817",
    },
    {
      id: uniqid(),
      name: "React JS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/768px-React.svg.png?20171020144116",
    },
    {
      id: uniqid(),
      name: "Node Js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png?20170401104355",
    },
    {
      id: uniqid(),
      name: "Git",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/146px-Git_icon.svg.png?20220905010122",
    },
    {
      id: uniqid(),
      name: "Webpack",
      img: "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg",
    },
    {
      id: uniqid(),
      name: "Express.JS",
      img: "https://initialcommit.com/img/initialcommit/beginners-guide-to-using-express-js-and-node-js-framework.png",
    },
    {
      id: uniqid(),
      name: "Next.JS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1920px-Nextjs-logo.svg.png",
    },
    // {
    //   name: "REACTJS",
    //   img: "",
    // },
    // {
    //   name: "REACTJS",
    //   img: "",
    // },
    // {
    //   name: "REACTJS",
    //   img: "",
    // },
  ];
  return (
    <div id="skills" className="skillsDiv">
      <div className="skillsHeading">
        <h1>
          Key Skills <span>&</span> Frames Works
        </h1>
      </div>
      <div className="skillsContent">
        <SideContact />
        <div className="skillscards reveal">
          <Fade bottom duration={1500}>
            {skillCards.map((card) => {
              return (
                <div key={card.id} className="skillCard">
                  <img src={card.img} alt={card.name} />
                  <p>{card.name}</p>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Skills;
