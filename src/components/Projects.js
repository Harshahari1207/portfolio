import { SideContact } from "./SideContact";
import shoppingCart from "../img/shopping.png";
import library from "../img/library.png";
import ticTacToe from "../img/tic-tac-toe.png";
import calculator from "../img/calculator.png";
import uniqid from "uniqid";
export const Projects = () => {
  const cards = [
    {
      id: uniqid(),
      name: "Shopping cart ",
      description:
        "Shopping made using React JS and has add items, remove items functionality",
      img: shoppingCart,
      link: "https://harshahari1207.github.io/shopping-cart/",
    },
    {
      id: uniqid(),
      name: "Tic-Tac-Toe ",
      description:
        "Tic-Tac-Toe Game created by using HTML, CSS, Vennila Javascript. It is a Game in which two peoples can Play.",
      img: ticTacToe,
      link: "https://harshahari1207.github.io/shopping-cart/",
    },
    {
      id: uniqid(),
      name: "Calculator ",
      description:
        "Calculator Web App is made using HTML, CSS and Vennila Javascript. And it have good User Interface",
      img: calculator,
      link: "https://harshahari1207.github.io/shopping-cart/",
    },
    {
      id: uniqid(),
      name: "Library ",
      description:
        "Library created using HTML, CSS and Vennila Javascript. And it has CRUD operations that we can add, edit, read and delete functions.",
      img: library,
      link: "https://harshahari1207.github.io/shopping-cart/",
    },
  ];
  return (
    <div id="projects" className="projects">
      <h1>PROJECTS</h1>
      <div className="projectsContent">
        <div className="sideContact">
          <SideContact />
        </div>
        <div className="allProjects">
          <div className="projectsCards">
            {cards.map((card) => {
              return (
                <div key={card.id} className="card">
                  <div className="cardImg">
                    <img src={card.img} alt="" />
                  </div>
                  <div className="cardContent">
                    <h2>{card.name} </h2>
                    <p>{card.description}</p>
                    <div className="demoDiv">
                      <a href={card.link}>Live Demo</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <a href="https://github.com/Harshahari1207?tab=repositories">
            <p>Click here for more Projects</p>
          </a>
        </div>
      </div>
    </div>
  );
};
