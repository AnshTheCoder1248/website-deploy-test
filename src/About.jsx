import { Link } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Profile from "./assets/About Me Profile.jpg";
import rct from "./assets/React.svg";
import Node from "./assets/Node.svg";
import Javascript from "./assets/Javascript.svg";
import CSS from "./assets/CSS3.svg";
import HTML from "./assets/HTML5.svg";
import Python from "./assets/Python.svg";
import Vite from "./assets/Vite.svg";
function Aboutme() {
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
          <Link to="/contact" className="Nav-Contact">
            Contact
          </Link>
        </div>
      </div>
      <img src={Profile} className="profile" />

      <div className="section1title">Bio</div>
      <h3 className="Bio-Name"> Name: Ansh Shah</h3>
      <h3 className="Bio-Age"> Age: 16 years old </h3>
      <h3 className="Bio-Grade"> Grade: Sophomore</h3>

      <div className="section2title"> Background Info</div>
      <p>
        I am an individual with a diverse background, with exposure to the tech
        industry from a very young age
        <br />
        My journey has been shaped by a blend of my educational background and
        practical experience,
        <br />
        leading me to where I am today. Having grown up in India, I was always
        encouraged to pursue
        <br />
        academic excellence and explore a range of interests, which set the
        foundation for my career development.
      </p>

      <div className="section3title"> Skills</div>
      <div className="scroller">
        <ul className="Skills-List InnerScroller">
          <li>
            <img src={Vite} />
          </li>
          <li>
            <img src={Python} />
          </li>
          <li>
            <img src={HTML} />
          </li>
          <li>
            <img src={CSS} />
          </li>
          <li>
            <img src={Javascript} />
          </li>
          <li>
            <img src={rct} />
          </li>
          <li>
            <img src={Node} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Aboutme;
