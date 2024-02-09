import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import CreepyImage from './../assets/Cre (1).jpeg_swing.mp4'
import Card from "./Card";
import LandingPage from "./LandingPage";
import CardList from "./CardList";
import { Routes , Route } from "react-router-dom";
import NewPost from "./NewPost";
const Homepage = () => {
  return (
    <div>
      <div className="backg-color">
        <div className="backg-img">
        </div>
      </div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/list" element={<CardList/>}/>
            <Route path="/list/newpost" element={<NewPost/>}/>

          </Routes>

    </div>
  );
};

export default Homepage;
