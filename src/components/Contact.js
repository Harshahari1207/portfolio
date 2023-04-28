import { SideContact } from "./SideContact";
import mail from "../img/Mail.png";
import phn from "../img/phone.png";
export const Contact = () => {
  return (
    <div className="mainContact" id="contact">
      <div className="sideContact">
        <SideContact />
      </div>
      <div className="mainContactForm">
        <h2>Contact Me</h2>
        <div className="contactDetails">
          <div className="mail">
            <div className="contactDetailsImg">
              <img src={mail} alt="" />
            </div>
            <a href="mailto:harsha733084@gmail.com">harsha733084@gmail.com</a>
          </div>
          <div className="phone">
            <div className="contactDetailsImg">
              <img src={phn} alt="" />
            </div>
            <a href="tel:+918247349639">8247349639</a>
          </div>
        </div>
        <form></form>
      </div>
    </div>
  );
};
