import { useState } from "react";
import "./UserPageNavBar.css";

const UserPageNavBar = () => {
  const [photoStream, setPhotoStream] = useState(true);
  const [favorites, setFavorites] = useState(false);
  return (
    <div className="user-page-nav-bar-container">
      <div className="user-page-nav-bar">
        <div className="photostream-option">Photostream</div>
        <div className="favorites-option">Favorites</div>
      </div>
    </div>
  );
};

export default UserPageNavBar;
