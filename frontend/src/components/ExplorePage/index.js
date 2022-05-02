import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../../store/image";
import ImageCard from "../ImageCard";
import "./ExplorePage.css";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const imageObjects = useSelector((state) => state.images.imageObjects);
  const images = Object.values(imageObjects);
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  console.log(images);
  return (
    <div className="body-container">
      <div className="inner-container">
        {/* <ImageCard imageType={"nature"} />
        <ImageCard imageType={"sport"} />
        <ImageCard imageType={"people"} />
        <ImageCard imageType={"fitness"} />
        <ImageCard imageType={"people"} />
        <ImageCard imageType={"sport"} />
        <ImageCard imageType={"food"} />
        <ImageCard imageType={"travel"} />
        <ImageCard imageType={"cars"} />
        <ImageCard imageType={"sport"} />
        <ImageCard imageType={"art"} />
        <ImageCard imageType={"travel"} /> */}

        {images?.map((image) => (
          <ImageCard imageUrl={image.imageUrl} imageType={image.favoriteCount} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
