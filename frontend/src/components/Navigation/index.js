import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import "./Navigation.css";
import LogoutButton from "./LogoutButton";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let navLeftLinks;
  let sessionLinks;
  if (sessionUser) {
    navLeftLinks = (
      <>
        <NavLink exact to="/">
          Explore
        </NavLink>
        <NavLink to={`/users/${sessionUser.id}`}>You</NavLink>
        <NavLink to={`/favorites`}>Favorites</NavLink>
      </>
    );
    sessionLinks = (
      <>
        {/* search bar component */}
        <NavLink exact to="/">
          Search
        </NavLink>
        <NavLink to="/upload">
          <button className="upload-btn">
            <i className="fa-solid fa-cloud-arrow-up fa-2xl"></i>
          </button>
        </NavLink>
        <LogoutButton />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
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
        {isLoaded && navLeftLinks}
      </div>
      <div className="nav-right">{isLoaded && sessionLinks}</div>
    </nav>
  );
}

export default Navigation;
