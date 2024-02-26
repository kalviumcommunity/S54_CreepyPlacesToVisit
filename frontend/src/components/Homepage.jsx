import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import CreepyImage from "./../assets/Cre (1).jpeg_swing.mp4";
import Card from "./Card";
import LandingPage from "./LandingPage";
import CardList from "./CardList";
import { Routes, Route } from "react-router-dom";
import NewPost from "./NewPost";
import Edit from "./Edit";
import EditForm from "./EditForm";
import Login from "./Login";
import Signup from "./Signup";
import User from "./User";
import UserPost from "./UserPost";
const Homepage = () => {
  return (
    <div>
      <div className="backg-color">
        <div className="backg-img"></div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<CardList />} />
        <Route path="/list/newpost" element={<NewPost />} />
        <Route path="/list/:id" element={<Edit />} />
        <Route path="/list/edit/:id" element={<EditForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<User/>} />
        <Route path="/posts/:user" element={<UserPost/>} />
      </Routes>
    </div>
  );
};

export default Homepage;
