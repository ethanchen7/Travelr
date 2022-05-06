import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import UploadFormModal from "../UploadPage";
import "./Navigation.css";
import LogoutButton from "./LogoutButton";
import SearchForm from "../Search/SearchForm";

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
        <SearchForm />

        <UploadFormModal />

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
