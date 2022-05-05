import { useState } from "react";
import "./UserPageNavBar.css";

const UserPageNavBar = ({ setPhotoStreamToggle }) => {
  return (
    <div className="user-page-nav-bar-container">
      <div className="user-page-nav-bar">
        <div
          className="photostream-option toggle"
          onClick={() => setPhotoStreamToggle(true)}
        >
          Photostream
        </div>
        <div
          className="favorites-option toggle"
          onClick={() => setPhotoStreamToggle(false)}
        >
          Favorites
        </div>
      </div>
    </div>
  );
};

export default UserPageNavBar;
