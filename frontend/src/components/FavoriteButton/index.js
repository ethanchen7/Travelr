import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FavoriteButton.css";
const FavoriteButton = ({ image }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [favoriteCount, setFavoriteCount] = useState(image.favoriteCount);
  //   const isFavorited = image.Favorites?.userId === sessionUser.id;

  const handleFavoriteClick = () => {};
  return <i className="fa-solid fa-heart fa-2xl"></i>;
};

export default FavoriteButton;
