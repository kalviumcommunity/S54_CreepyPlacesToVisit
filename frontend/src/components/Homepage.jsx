import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import CreepyImage from './../assets/Cre (1).jpeg_swing.mp4'
import creepy from './../assets/Cre (1).jpeg'
const Homepage = () => {
  return (
    <div>
      <div className="backg-color">
        <div className="backg-img">
        </div>
      </div>
          <Navbar/>

          <div className="creepy-Travel-Container">
            <div className="creepy-image">
            <video autoPlay loop muted>
            <source src={CreepyImage} type="video/mp4" />
          </video>
            </div>
            <div className="creepy-tagline">
            Unearth the Unseen, <br /> <span>Explore the Unexplained.</span>
            </div>

          </div>
          <div className="button_creepy_main">
            <button className="creepy-button"></button>
          </div>
    </div>
  );
};

export default Homepage;
