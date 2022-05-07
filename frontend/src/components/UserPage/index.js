import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  loadImages,
  loadDetails,
  loadFavoriteImages,
} from "../../store/profile";
import UserPageHeader from "../UserPageHeader";
import UserPageNavBar from "../UserPageNavBar";
import "./UserPage.css";
import UserPagePhotoStream from "../UserPagePhotoStream";
import UserPageFavorites from "../UserPageFavorites";

const UserPage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [photoStreamToggle, setPhotoStreamToggle] = useState(true);
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams();
  const images = useSelector((state) => state.profile.profileImages);
  const imageObjects = Object.values(images);
  const details = useSelector((state) => state.profile.profileDetails);
  const favoriteObject = useSelector((state) => state.profile.favoriteImages);
  const favorites = Object.values(favoriteObject);

  if (!sessionUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(loadImages(id))
      .then(() => dispatch(loadDetails(id)))
      .then(() => dispatch(loadFavoriteImages(id)))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <div className="user-page-container">
        <UserPageHeader details={details} />
        <UserPageNavBar setPhotoStreamToggle={setPhotoStreamToggle} />
        <div className="user-page-body">
          {photoStreamToggle ? (
            <UserPagePhotoStream
              imageObjects={imageObjects}
              sessionUser={sessionUser}
              userPageId={id}
            />
          ) : (
            <UserPageFavorites
              favorites={favorites}
              sessionUser={sessionUser}
              userPageId={id}
            />
          )}
        </div>
      </div>
    );
  }
};

export default UserPage;
