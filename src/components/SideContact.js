import fb from "../img/icons8-facebook.svg";
import linkedin from "../img/icons8-linkedin.svg";
import github from "../img/icons8-github.svg";
export const SideContact = () => {
  return (
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
  );
};
