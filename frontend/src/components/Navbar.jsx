import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppContext } from "./Context";
import { deleteCookie } from "../utils/cookies";
import { loginCheck } from "../utils/loginCheck";

const Navbar = () => {
  const {login,setLogin} = useContext(AppContext)
  const logout = () => {
    deleteCookie("username")
    deleteCookie("auth-token")
    setLogin(loginCheck());
  };
  const loginBtn = () => {
    if (login) {
      return (
        <div className="option" onClick={logout}>
          Logout
        </div>
      );
    } else {
      return (
        <Link to="/login">
          <div className="option">Sign-Up/Log-In</div>
        </Link>
      );
    }
  };
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
            to="/list/newpost"
            className="Add"
            style={{ textDecoration: "none" }}
            >
            Add Post
          </Link>
            <Link to={"/users"}  className="User"
            style={{ textDecoration: "none" }}><div>users</div></Link>
            {loginBtn()}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
