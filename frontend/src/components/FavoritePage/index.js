import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/image";
import { loadFavoriteImages } from "../../store/profile";
import ImageCard from "../ImageCard";
import "./FavoritePage.css";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const favoriteObject = useSelector((state) => state.profile.favoriteImages);
  const favorites = Object.values(favoriteObject);

  useEffect(() => {
    dispatch(loadFavoriteImages(sessionUser.id));
    dispatch(getImages);
    setIsLoaded(true);
  }, [dispatch, sessionUser.id]);

  if (!isLoaded) {
    return null;
  } else {
    if (favorites.length) {
      return (
        <div className="body-container">
          <p>Your Favorites</p>
          <div className="inner-container">
            {favorites.map((fav) => {
              return (
                <ImageCard
                  key={`${fav.Image.id}`}
                  image={fav.Image}
                  explorePage={false}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="no-favorites-container">
          <>
            <img src="/images/travelrblack.png" alt="logo" />
            <h1>Oops, looks like you don't have any favorites yet.</h1>
            <h3>Explore and add some favorites!</h3>
          </>
        </div>
      );
    }
  }
};

export default FavoritePage;
