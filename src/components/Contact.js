import { SideContact } from "./SideContact";
import mail from "../img/Mail.png";
import phn from "../img/phone.png";
import { useState } from "react";
import firebase from "./firebase";
import "firebase/database";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionDisplay, setSubmissionDisplay] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionDisplay(
      "Message sent successfully. Send another message if needed."
    );
    try {
      // Save form data in Firebase Realtime Database
      await firebase.database().ref("submissions").push({
        name,
        email,
        message,
      });
      console.log("Submission complete");

      // Email sending code goes here (if needed)

      // Reset the form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mainContact" id="contact">
      <div className="sideContact">
        <SideContact />
      </div>
      <div className="mainContactForm">
        <p className="formSubmissionDisplay">{submissionDisplay}</p>
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
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            <input
              className="inputName"
              type="text"
              placeholder="Your Name"
              name="username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <input
              className="inputMail"
              type="email"
              placeholder="abc@gmail.com"
              name="mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputTextDiv">
            <textarea
              className="inputMessage"
              type="text"
              placeholder="Message"
              name="username"
              required
              cols={5}
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
