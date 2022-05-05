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
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  } else {
    return (
      <div className="body-container">
        <div className="inner-container">
          {favorites?.map((fav) => {
            return (
              <ImageCard key={fav.id} image={fav.Image} explorePage={false} />
            );
          })}
        </div>
      </div>
    );
  }
};

export default FavoritePage;
