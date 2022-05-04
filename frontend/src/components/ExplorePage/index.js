import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/image";
import ImageCard from "../ImageCard";
import "./ExplorePage.css";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const imageObjects = useSelector((state) => state.images.imageObjects);
  const imageArray = Object.values(imageObjects).filter(
    (image) => image.User.id !== sessionUser.id
  );
  // display random amount of images
  const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const randomLow = Math.floor(getRandom(1, 9));
  const randomHigh = Math.floor(getRandom(10, 20));
  const images = imageArray.slice(randomLow, randomHigh);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <div className="body-container">
      <div className="inner-container">
        {images?.map((image) => {
          return <ImageCard key={image.id} image={image} explorePage={true} />;
        })}
      </div>
    </div>
  );
};

export default ExplorePage;
