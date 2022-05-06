import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, createFavorite } from "../../store/image";
import "./FavoriteButton.css";
const FavoriteButton = ({ image, small }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const isFavorited = image.Favorites?.filter(
    (favorite) => favorite.userId === sessionUser.id
  );
  const [favorited, setFavorited] = useState(
    isFavorited && isFavorited.length > 0
  );
  const imageId = image.id;
  const userId = sessionUser.id;

  const handleFavoriteClick = () => {
    let currentFavCount = image.favoriteCount;
    currentFavCount += 1;
    setFavorited(true);
    dispatch(
      createFavorite({
        imageId,
        imageUserId: image.User.id,
        userId,
        imageUrl: image.imageUrl,
        favoriteCount: currentFavCount,
        tags: image.tags,
      })
    );
  };
  const handleUnFavoriteClick = () => {
    let currentFavCount = image.favoriteCount;
    currentFavCount -= 1;
    setFavorited(false);
    dispatch(
      removeFavorite({
        imageId,
        imageUserId: image.User.id,
        userId,
        imageUrl: image.imageUrl,
        favoriteCount: currentFavCount,
        tags: image.tags,
      })
    );
  };

  if (!small) {
    return (
      <i
        className={`fa-solid fa-heart fa-2xl ${favorited ? "red" : ""}`}
        onClick={favorited ? handleUnFavoriteClick : handleFavoriteClick}
      ></i>
    );
  } else {
    return (
      <i
        className={`fa-solid fa-heart small ${favorited ? "red" : ""}`}
        onClick={favorited ? handleUnFavoriteClick : handleFavoriteClick}
      ></i>
    );
  }
};

export default FavoriteButton;
