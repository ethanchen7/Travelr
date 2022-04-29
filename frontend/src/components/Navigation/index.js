import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = "";
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav className="navigation-bar">
      <div className="nav-left">
        <NavLink exact to="/">
          <img
            src="/images/travelrlogowhite.png"
            className="nav-logo"
            alt="logo"
          ></img>
        </NavLink>
      </div>
      <div className="nav-right">{isLoaded && sessionLinks}</div>
    </nav>
  );
}

export default Navigation;
