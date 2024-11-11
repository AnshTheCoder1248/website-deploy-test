import React from "react";
import { Link } from "react-router-dom";
import Aboutme from "./About";
import Home from "./Home";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Javascript from "./assets/Javascript.svg";
import CSS from "./assets/CSS3.svg";
import HTML from "./assets/HTML5.svg";
import buffer from "./assets/NightWallpaper.jpg";
import rct from "./assets/React.svg";
import Node from "./assets/Node.svg";
import Vite from "./assets/Vite.svg";
function Portfolio() {
  return (
    <>
      <div className="nav">
        <div className="navlinks">
          <Link to="/" className="Nav-Home">
            Home
          </Link>
          <Link to="/about" className="Nav-About">
            About
          </Link>
          <Link to="/contact" className="Nav-Contact">
            Contact
          </Link>
        </div>
      </div>
      {/* Projects List */}
      <div className="ProjectContainer">
        <Card sx={{ maxWidth: 345 }} className="project ">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 1
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
              <img src={Javascript} className="javascript" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project ">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 2
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project ">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 3
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 4
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 5
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 6
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 7
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 8
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 9
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project 10
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <img src={Javascript} className="javascript" />
              <img src={CSS} className="css" />
              <img src={HTML} className="html" />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              App 1
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Soon to be developed
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="project">
          <CardMedia component="img" height="140" image={buffer} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              App 2
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Soon to be developed
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Portfolio;
