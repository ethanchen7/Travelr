import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/image";
import ImageCard from "../ImageCard";
import "./ExplorePage.css";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const imageObjects = useSelector((state) => state.images.imageObjects);
  const images = Object.values(imageObjects).slice(0, 10);
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
