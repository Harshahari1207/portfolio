import dark from "../img/moon-icon.svg";
export const Nav = () => {
  console.log(dark);
  return (
    <div className="navBar">
      <div className="darkLogo">
        <img src={dark} alt="" />
      </div>
      <div className="navLinks">
        <h4>About</h4>
        <h4>Projects</h4>
        <h4>Skills</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
};
