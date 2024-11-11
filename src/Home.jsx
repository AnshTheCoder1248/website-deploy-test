import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Aboutme from "./About";
import Contact from "./Contact Me";
import Meta from "./assets/Meta.svg";
import Amazon from "./assets/Amazon.svg";
import Netflix from "./assets/Netflix.svg";
import Google from "./assets/Google.svg";
import Apple from "./assets/Apple.svg";
import Microsoft from "./assets/Microsoft.png";
import Github from "./assets/github.svg";
import Figma from "./assets/figma.svg";
import React from "./assets/React.svg";
import Vite from "./assets/Vite.svg";
import CSS from "./assets/CSS3.svg";
import HTML from "./assets/HTML5.svg";
import Node from "./assets/Node.svg";

function Home() {
  return (
    <>
      <div className="nav">
        <div className="navlinks">
          <Link to="/about" className="Nav-About">
            About
          </Link>
          <Link to="/portfolio" className="Nav-Portfolio">
            Portfolio
          </Link>
          <Link to="/contact" className="Nav-Contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="rectangle">
        <div className="faangM">
          <img src={Meta} className="Meta" />
          <img src={Amazon} className="Amazon" />
          <img src={Netflix} className="Netflix" />
          <img src={Google} className="Google" />
          <img src={Apple} className="Apple" />
          <img src={Microsoft} className="Microsoft" />
        </div>
        <h1>
          My name is Ansh,
          <br />
          an Aspiring
          <br />
          Software
          <br />
          Engineer
        </h1>
      </div>
      <div className="Socials">
        <a href="https://github.com/AnshTheCoder1248">
          <img src={Github} className="Social-Github" />
        </a>
        <a href="https://www.figma.com/files/team/1071178055736572103/recents-and-sharing/recently-viewed?fuid=1071178050267125495">
          <img src={Figma} className="Social-Figma" />
        </a>
      </div>
      <h5>
        Tools and Frameworks used to make this website: -
        <br />
        <img src={React} className="react" />
        <br />
        <img src={HTML} className="html" />
        <br />
        <img src={CSS} className="css" />
        <br />
        <img src={Node} className="node" />
        <br />
        <img src={Vite} className="vite" />
      </h5>
    </>
  );
}

export default Home;
