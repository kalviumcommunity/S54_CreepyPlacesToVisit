import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import CreepyImage from './../assets/Cre (1).jpeg_swing.mp4'
import Card from "./Card";
import LandingPage from "./LandingPage";
import CardList from "./CardList";
const Homepage = () => {
  return (
    <div>
      <div className="backg-color">
        <div className="backg-img">
        </div>
      </div>
          <Navbar/>
          {/* <LandingPage/> */}
          {/* <Card/> */}
          <CardList/>
    </div>
  );
};

export default Homepage;
