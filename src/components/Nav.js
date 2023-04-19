import dark from "../img/moon-icon.svg";
export const Nav = () => {
  console.log(dark);
  return (
    <div className="navBar">
      <div className="darkLogo">
        <img src={dark} alt="" />
      </div>
      <div className="navLinks">
        <ul>
          <li className="navAbout">
            {" "}
            <a href="#About">About</a>
          </li>

          <li className="navProjects">Projects</li>
          <li className="navSkills">SKills</li>
          <li className="navContact">Contact</li>
        </ul>
      </div>
    </div>
  );
};
