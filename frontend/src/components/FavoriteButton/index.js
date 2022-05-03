import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, createFavorite } from "../../store/image";
import "./FavoriteButton.css";
const FavoriteButton = ({ image }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const isFavorited = image.Favorites?.filter(
    (favorite) => favorite.userId === sessionUser.id
  );
  const [favorited, setFavorited] = useState(isFavorited.length > 0);
  const imageId = image.id;
  const userId = sessionUser.id;
  // NEED TO NOT RENDER THIS IN THE PRFOILE PAGE DUMMASS
  const handleFavoriteClick = () => {
    let currentFavCount = image.favoriteCount;
    currentFavCount += 1;
    setFavorited(true);
    dispatch(
      createFavorite({
        imageId,
        userId,
        imageUrl: image.imageUrl,
        favoriteCount: currentFavCount,
        tags: image.tags,
      })
    );
  };
  const handleUnFavoriteClick = () => {
    setFavorited(false);
    dispatch(removeFavorite({ imageId, userId }));
  };
  return (
    <i
      className={`fa-solid fa-heart fa-2xl ${favorited ? "red" : ""}`}
      onClick={favorited ? handleUnFavoriteClick : handleFavoriteClick}
    ></i>
  );
};

export default FavoriteButton;
