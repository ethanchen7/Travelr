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

  // display images in random order, each rerender
  const images = imageArray.sort(func);

  function func(a, b) {
    return 0.5 - Math.random();
  }

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <div className="body-container">
      <p>Explore</p>
      <div className="inner-container">
        {images?.map((image) => {
          return <ImageCard key={image.id} image={image} explorePage={true} />;
        })}
      </div>
    </div>
  );
};

export default ExplorePage;
