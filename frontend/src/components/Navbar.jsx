import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left-nav">
          <div className="creepy-travels">
            Creepy<span>Travels</span>
          </div>
        </div>
        <div className="right-nav">
          <Link to="/" className="home" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/about"
            className="about"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            to="/login"
            className="login"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
          <Link
            to="/list/newpost"
            className="Add"
            style={{ textDecoration: "none" }}
          >
            Add Post
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
