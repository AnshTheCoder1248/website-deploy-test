import { Link } from "react-router-dom";
import Aboutme from "./About";
import Home from "./Home";
import Portfolio from "./Portfolio";
function Contact() {
  return (
    <>
      <div className="nav">
        <div className="navlinks">
          <Link to="/" className="Nav-Home">
            Home
          </Link>
          <Link to="/portfolio" className="Nav-Portfolio">
            Portfolio
          </Link>
          <Link to="/about" className="Nav-About">
            About
          </Link>
        </div>
      </div>
      <form
        action="https://getform.io/f/ajjjegka"
        method="POST"
        className="Contact-Page"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="Contact-Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="Contact-Email"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="Contact-Message"
          required
          rows="15"
          cols="50"
        ></textarea>
        <button type="submit" className="Submitbtn">
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
